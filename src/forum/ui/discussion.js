import React, { useState, useEffect, useRef, useCallback } from 'react';
import styled from 'styled-components';
import { theme } from "../utilities"
import { Menu, MenuItem, Avatar, IconButton, Collapse, Button, Input, Icon, TextField, LinearProgress, CircularProgress } from "@mui/material"
import { useQuery, useQueryClient, useMutation, useInfiniteQuery } from 'react-query'
import { getDiscussion, getDiscussionPosts, getDiscussionInfo } from "../api/get"
import { addReply } from "../api/set"
import addPostMutator from "../api/rest/addPost"
import deletePostMutator from "../api/rest/deletePost"
import addReplyMutator from "../api/rest/addReply"
import editPostMutator from "../api/rest/editPost"
import { TransitionGroup } from 'react-transition-group';
import { deepOrange, deepPurple } from '@mui/material/colors';

const StyledDiscussion = styled.div`
& textarea{
    background: #d8d8d8;
    width: 350px;
    height: 62px;
    color: #131313;
    border-radius: 4px;
}
border-radius: 4px;
padding: 18px;
background: #282828;
max-width: ${theme.w};
box-shadow: 2px 2px 2px #00000085;
margin: auto;
    text-align: left;
& .timestamp{
    color:#999;
}
& .content{

}
& .title{
    font-size: 1.4em;
    color: #ffffffc9;
    font-weight: 600;
}
& .name{
    font-size: .9em;
    color: #ececece3;
    font-weight: 600;
 }
`
const StyledCollection = styled.div`
display:flex;
flex-direction:column;
    border: 1px solid #707070;
    background: #363636;
    border-radius: 4px;

`
const StyledPost = styled.div`
// background: #ffa50000;
 border-bottom: 1px solid #555; 
padding: 8px;
& .content{
    color:#ffffffc9;
    padding:0 8px;
    white-space: pre-wrap;
}
& .actions{
    display:flex;
    align-items:center;
}
& .name{
    padding:0 8px;
}
}
`
function removePages(queryClient, threadID) {
    return async () => {
        await queryClient.cancelQueries('getDiscussion');
        queryClient.setQueryData(['getDiscussion', threadID], data => ({
            pages: data.pages.slice(0, 1),
            pageParams: data.pageParams.slice(0, 1),
        }))
    }
}
function useInfiniteQuery2(threadID,name) {
    const query = useInfiniteQuery([name, threadID], ({ pageParam }) => 
    getDiscussionPosts(threadID, pageParam) 
    ,{
        enabled:true,
         refetchInterval: 1000 * 60 * 2,
         refetchOnWindowFocus: false,
         getNextPageParam: (lastPage) => {
             return lastPage.Thread.Posts.nextToken
         },
     })
     return query
}
export default function Discussion({ scrolledToBottom, threadID, user }) {
    const [debounce, setDebounce] = useState(false)
    useEffect(() => {
        return removePages(queryClient, threadID)
    }, [])
    const queryClient = useQueryClient()
    const editPostMutation = useMutation(...editPostMutator(queryClient))
    const deletePostMutation = useMutation(...deletePostMutator(queryClient))
    const addReplyMutation = useMutation(...addReplyMutator(queryClient))
    // const addReplyMutation = useMutation(({ input }) => addReply(input),
    //     {
    //         onError: (err, newPost, context) => {
    //             console.log(err);
    //             alert(err || "couldn't complete request. Please try again")
    //         },
    //         onSuccess: async (reply, input) => {
    //             const { postIndex } = input
    //             queryClient.setQueryData(['getDiscussion', threadID], (d) => {
    //                 let discussion = { ...d }
    //                 const replyThread = discussion.pages[0].Thread.Posts.items[postIndex].ReplyThread.Thread
    //                 if (!replyThread.Posts) { replyThread.Posts = { items: [] } }
    //                 replyThread.Posts.items.push(reply)
    //                 replyThread.Posts.scannedCount++
    //                 return discussion
    //             });
    //         },
    //     })
    const mutators = {
        addReplyMutation,
        deletePostMutation,
        editPostMutation
    }
    // const frontendAddReply = useCallback((content, post, postIndex) => {
    //     const threadID = post.ReplyThread?.Thread?.id
    //     let input = {
    //         postId: post.id,
    //         content,
    //         threadID,
    //         user
    //     }
    //     addReplyMutation.mutate({ input, postIndex })
    // }, [user])

    // const discussionQuery = useInfiniteQuery(['getDiscussion', threadID], ({ pageParam }) => 
    //    getDiscussionPosts(threadID, pageParam) 
    //    ,{
    //         refetchInterval: 1000 * 60 * 2,
    //         refetchOnWindowFocus: false,
    //         getNextPageParam: (lastPage) => {
    //             return lastPage.Thread.Posts.nextToken
    //         },
    //     })
    const discussionQuery =   useInfiniteQuery2(threadID,'getDiscussion')
    
    // const { data:discussion, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } = q1
    const { data: data2, isLoading: isLoading2 } = useQuery(['getDiscussionInfo', threadID], () => {
        return getDiscussionInfo(threadID)
    }, {
        // staleTime: 30000,
        // refetchOnWindowFocus: false,
        // refetchOnMount, refetchOnWindowFocus, refetchOnReconnect,
        refetchInterval: 1000 * 60 * 3
        //  enabled: query1.user?.id,initialData
    })
    handleInfiniteScroll()
    return <StyledDiscussion  >
        {discussionQuery.isLoading || isLoading2 ? "" : <>
            <DiscussionContent {...{ discussion: data2 }} />
            <AddPostUi {...{ discussion: data2, user, threadID }} />
        </>}
        {discussionQuery.isLoading || isLoading2 ? <>loading... <LinearProgress /></> : <>
            <ThreadUi {...{ user, mutators, threadID, discussion: discussionQuery.data, }} />
            <div >{
                discussionQuery.isFetchingNextPage ? <>loading... <LinearProgress /></>
                    : discussionQuery.hasNextPage ? 'load more' : 'no more posts'
            }</div>
        </>}
    </StyledDiscussion>
    function handleInfiniteScroll() {
        if (scrolledToBottom && !discussionQuery.isLoading && discussionQuery.hasNextPage) {
            if (!debounce) {
                discussionQuery.fetchNextPage()
                setDebounce(true)
            }
        }
        else if (debounce) setDebounce(false)
    }
}
function AddPostUi({ discussion, user, threadID }) {
    const [text, setText] = useState("")
    const queryClient = useQueryClient()
    const addPostMutation = useMutation(...addPostMutator(queryClient))
    function frontendAddPost() {
        addPostMutation.mutate({
            user, input: {
                body: {
                    threadID: discussion.threadID,
                    content: text
                }
            }
        })
    }


    return <><textarea value={text} onChange={(e) => setText(e.target.value)}
        placeholder="Type your response here"
        multiline
        rows={2}
        maxRows={40}
    />
        <Button onClick={() => {
            frontendAddPost()
        }}>new comment<Icon>add</Icon></Button>
        {addPostMutation.isLoading ? <>submitting post...<CircularProgress size={15} /></> : ''}
    </>
}
function DiscussionContent({ discussion }) {
    const discussionData = discussion
    //        {data.pages.map((group, i) => (
    //      <React.Fragment key={i}>
    //        {group.projects.map(project => (
    //          <p key={project.id}>{project.name}</p>
    //        ))}
    //      </React.Fragment>
    //    ))}
    return <><div >
        <span className="title"> {discussionData.title} {discussionData.Thread.count} </span>
        <span className="timestamp">posted by {discussionData.User.name}  1 month ago</span>
    </div>
        <div className="content">{discussionData.content}</div>
    </>
}
function ThreadUi({ user, mutators, threadID, isReply, discussion }) {

    let posts
    if (discussion.pages)
        posts = discussion.pages.reduce((p, c, pageIndex) => {
            return [...p, ...c.Thread.Posts.items.map((e, postIndex) => ({ ...e, pageIndex, postIndex }))]
        }, [])
    else posts = discussion.Thread.Posts.items
    posts.sort((aa, bb) => {
        const a = Date.parse(aa.createdAt)
        const b = Date.parse(bb.createdAt)
        return a > b ? -1 : a == b ? 0 : 1
    })
    //unmountOnExit
    let posts1 = posts.map((post, i) => <Collapse key={post.id}>
        <Post {...{ user, mutators, threadID, post, isReply }} />
    </Collapse>)
    return <StyledCollection>
        <TransitionGroup
            timeout={{
                appear: 600,
                enter: 600,
                exit: 1600,
            }}
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
        >
            {posts1}
        </TransitionGroup>
    </StyledCollection>
}
class Post extends React.PureComponent {
    constructor(props) {
        super(props)
        const { mutators, threadID, user, post } = this.props

        this.state = {
            editing: false,
            newContent: ''
        }
        this.setEditing = (v) => {
            this.setState({ editing: v })
        }
        this.setNewContent = (v) => {
            this.setState({ newContent: v })
        }
        this.frontendDeletePost = () => {
            mutators.deletePostMutation.mutate({
                user, input: {
                    body: { postID: post.id, threadID },
                    postIndex: post.postIndex, pageIndex: post.pageIndex, threadID
                }
            })
        }
        this.frontendAddReply = (content, post) => {
            // const threadID = post.ReplyThread?.Thread?.id
            let input = {
                postId: post.id,
                threadID,
                 postIndex: post.postIndex, postPageIndex: post.pageIndex, parentThreadID:threadID,
                body: {
                    content,
                    threadID: post.ReplyThread?.Thread?.id
                },
            }
            mutators.addReplyMutation.mutate({
                user, input
            })
            return mutators.addReplyMutation
            // mutators.addReplyMutation.mutate({ input })
        }
        this.frontendEditPost = (content) => {
            mutators.editPostMutation.mutate({
                user, input: {
                    body: { postID: post.id, content },
                    postIndex: post.postIndex, pageIndex: post.pageIndex, threadID,
                }
            })
        }
    }
    render() {
        const { frontendDeletePost, frontendAddReply, frontendEditPost } = this
        const { mutators, user, post,threadID } = this.props
        const { editing, newContent } = this.state
        const { isLoading } = mutators.editPostMutation
        let toggleEditing = function () {
            if (!editing) this.setNewContent(post.content)
            this.setEditing(!editing)
        }
        let replies = post.ReplyThread
        return <StyledPost  >
            <div className="name">
                <Avatar sx={{
                    display: 'inline-flex',
                    marginRight: '8px', bgcolor: deepOrange[500]
                }}>M</Avatar>
                {post.User.name}  <span className="timestamp">1 month ago</span></div>
            {!editing ? <div className="content">{post.content}</div>
                : <>
                    <textarea className="content" onChange={function (e) { this.setNewContent(e.target.value) }} value={newContent} />
                    <button onClick={function () {
                        frontendEditPost(newContent)
                        //  mutators.editPostMutation
                        this.setEditing(false)
                    }}>save</button></>}
            {isLoading ? 'loading' : ''}
            {<Actions {...{ threadID, post, toggleEditing, newContent, user, mutators, frontendDeletePost, replies, frontendAddReply }} />}
        </StyledPost>
    }
}
function Actions({ threadID, post, toggleEditing, newContent, user, mutators, frontendDeletePost, replies, frontendAddReply }) {
    const [formOpen, setFormOpen] = useState(false)
    const [open, setOpen] = useState(false)
    const [content, setContent] = useState("")
    const [anchorEl, setAnchorEl] = React.useState(null);
    const menuOpen = Boolean(anchorEl);
    function sendReply(content) {
        frontendAddReply(content, post)
    }
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const replyForm = <div><input value={content} onChange={(e) => setContent(e.target.value)} /><br />
        <Button onClick={() => setFormOpen(false)}>cancel</Button>
        <Button onClick={() => {setFormOpen(false);sendReply(content)}}>reply</Button>
    </div>

    const n = replies?.Thread?.count
    return <div>
        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={menuOpen}
            onClose={handleClose}
            MenuListProps={{
                'aria-labelledby': 'basic-button',
            }}
        >
            <MenuItem onClick={() => { toggleEditing(); handleClose() }}>Edit</MenuItem>
            <MenuItem onClick={() => { frontendDeletePost(); handleClose() }}>Delete</MenuItem>
            <MenuItem onClick={handleClose}>Report</MenuItem>
        </Menu>
        <div className="actions">
            <ActionButton>thumb_up_off_alt</ActionButton> 125
            <ActionButton>thumb_down_off_alt</ActionButton>
            <ActionButton text onClick={() => { setFormOpen((e) => !e) }}>reply</ActionButton>
            <ActionButton onClick={handleClick}>more_horiz</ActionButton>
            {/* <ActionButton  onClick = {()=>{toggleEditing()}}> edit </ActionButton>
           <ActionButton onClick = {frontendDeletePost}>delete_outlined</ActionButton> */}
        </div>
        {formOpen ? replyForm : ""}
        {n>0 ?open?<Replies {...{ threadID, user, mutators, threadID, replies, setOpen, open, n }} /> 
        :<Button onClick={() => setOpen((e)=>!e)}>{open?"hide":"show"} {n} replies</Button>
    
         : ""
        }
    </div>
}
function Replies({ user, mutators, threadID, replies, setOpen, open, n }) {
    console.log(replies)
    const replyQuery =   useInfiniteQuery2(replies.Thread.id,'getReply')
    console.log(replyQuery)
   
    return <>
     <Button onClick={() => setOpen((e)=>!e)}>{
     open?replyQuery.isLoading?"loading":"hide":"show"} {n} replies</Button>
    {(replyQuery.isSuccess  == true && replyQuery.data!=null)?<div>replies:
        <ThreadUi {...{ user, mutators, threadID, discussion: replyQuery.data, isReply: true }} />
        {/* <Button onClick={() => setOpen(false)}>hide {n} replies</Button> */}
    </div>:""}
    </>
   
    
}
function ActionButton({ children, ...props }) {
    return <IconButton
        {...props}
        size='small'
        style={{ color: '#999' }}
        color='secondary'
    >
        {props.text ? children : <Icon style={{ fontSize: '22px', marginRight: '8px' }}>{children}</Icon>}
    </IconButton>

}