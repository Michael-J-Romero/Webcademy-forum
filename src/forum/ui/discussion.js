import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { theme } from "../utilities"
import { Button, Input, Icon, TextField,LinearProgress,CircularProgress  } from "@mui/material"
import { useQuery, useQueryClient, useMutation,useInfiniteQuery  } from 'react-query'
import { getDiscussion ,getDiscussionPosts,getDiscussionInfo} from "../api/get"
import { addReply, addPost } from "../api/set"

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
background: #111;
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
    margin-bottom: 4px;
}
`
const StyledCollection = styled.div`
display:flex;
flex-direction:column;
    padding: 12px;
    border: 1px solid #999;
    border-radius: 4px;

`
const StyledPost = styled.div`
${({ last }) => `
// background: #ffa50000;
${last ? "" : "border-bottom: 1px solid #555;"}
padding: 8px;
& .content{
}
& .actions{
    display:flex;
    align-items:center;
}
& .name{
}
`}
`
export default function Discussion({scrolledToBottom, threadID, getDiscussionData, discussion, user, frontendAddReply }) {
    useEffect(()=>{
       return async()=>{
        await queryClient.cancelQueries('getDiscussion');

        queryClient.setQueryData(['getDiscussion', threadID], data => ({
           pages: data.pages.slice(0,1),
           pageParams: data.pageParams.slice(0,1),
           
       }))
       }
    },[])
    const [debounce,setDebounce] = useState(false)
    const q1 = useInfiniteQuery (['getDiscussion', threadID], ({ pageParam  }) => {
        return getDiscussionPosts(threadID,pageParam)
    },{
        refetchInterval:1000*60*2,

        refetchOnWindowFocus: false,
        getNextPageParam: (lastPage, pages) => {
            return lastPage.Thread.Posts.nextToken
        },
    })
    const { data, isLoading,fetchNextPage ,hasNextPage,isFetchingNextPage}=q1
    if(scrolledToBottom && !isLoading && hasNextPage){
        if(!debounce){
            fetchNextPage()
            setDebounce(true)
        }
    }
    else if(debounce)setDebounce(false)
     
    const { data:data2, isLoading:isLoading2 } = useQuery(['getDiscussionInfo', threadID], () => {
        return getDiscussionInfo(threadID)
    },{
    staleTime: 30000,
    // refetchOnWindowFocus: false,
    // refetchOnMount, refetchOnWindowFocus, refetchOnReconnect,
    refetchInterval:1000*60*3
    //  enabled: query1.user?.id,initialData
    })
console.log(data2,'data2');
const queryClient = useQueryClient()

    return   <StyledDiscussion  >
        {isLoading ||isLoading2 ? "":<>
            <DiscussionContent {...{ discussion: data2 }} />
            <AddPost {...{ discussion: data2, user,threadID }} />
      
            </>}
        {isLoading||isLoading2 ? <>loading... <LinearProgress /></>:<>
            <ThreadUi {...{ Thread: data.Thread, discussion: data, frontendAddReply }} />
            <div >{
                isFetchingNextPage?<>loading... <LinearProgress /></>:
                hasNextPage?'load more'
                :'no more posts'
            }</div>
         </>}
        </StyledDiscussion>
   
}
function AddPost({ discussion, user,threadID }) {
    const [text, setText] = useState("")
    const queryClient = useQueryClient()
    const mutation = useMutation((input) => { return addPost(input) },
        {
            // onMutate: async (newPokemon) => {
            //     await queryClient.cancelQueries('getDiscussion');
            //     const previousDiscussion = queryClient.getQueryData('getDiscussion');
            //     queryClient.setQueryData('getDiscussion', [
            //       ...previousDiscussion,
            //       { name: newPokemon },
            //     ]);
            //     return { previousDiscussion, newPokemon };
            // },
            onError: (err, newPokemon, context) => {
                console.log(err,"error")
                alert("couldn't complete request. Please try again")
            //     queryClient.setQueryData('getDiscussion', context.previousDiscussion);
            },
            onSuccess: async (newPokemon) => {
                console.log(newPokemon)
                queryClient.setQueryData(['getDiscussion', threadID], (old) => {
                    console.log(old.pages[0])
                    const oldPosts = old.pages[0].Thread.Posts.items
                    const updated = {...old.pages[0]}
                    updated.Thread = {...updated.Thread}
                    updated.Thread.Posts = {...updated.Thread.Posts}
                    updated.Thread.Posts.items = [newPokemon,...oldPosts]
                    queryClient.invalidateQueries('getDiscussion')
                    return {...old,pages:[updated,...old.pages.slice(1)]}
                });
            },
            // onSuccess: () => {
            // },
        })
    function frontendAddPost(input) {
        mutation.mutate({ ...input, postUserId: user.attributes.sub, })
    }
    return <><textarea value={text} onChange={(e) => setText(e.target.value)}
        placeholder="Type your response here"
        multiline
        rows={2}
        maxRows={40}
    />
        <Button onClick={() => {
            frontendAddPost({
                content: text,
                threadID: discussion.threadID
            })
        }}>new comment<Icon>add</Icon></Button>
        {mutation.isLoading?<>submitting post...<CircularProgress size = {15} /></>:''}
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
        <span className="title"> {discussionData.title} </span>
        <span className="timestamp">posted by {discussionData.User.name}  1 month ago</span>
    </div>
        <div className="content">{discussionData.content}</div>
    </>
}
function ThreadUi({ isReply, discussion, frontendAddReply }) {
    // const Thread = discussion.pages[0].Thread
    let posts
    console.log(discussion);
    if(discussion.pages)
    posts = discussion.pages.reduce((p,c)=>{
        return[...p,...c.Thread.Posts.items]
    },[])
    else posts=discussion.Thread.Posts.items
    // const { items: posts } = Thread.Posts
    posts.sort((aa, bb) => {
        const a = Date.parse(aa.createdAt)
        const b = Date.parse(bb.createdAt)
        return a > b ? -1 : a == b ? 0 : 1
    })
    return <StyledCollection>
        {posts.map((post, i) => <Post {...{ frontendAddReply, i, post, isReply, last: i == posts.length - 1 }} />)}
    </StyledCollection>
}
function Post({ post, last, isReply, i, frontendAddReply }) {
    let replies
    replies = post.ReplyThread
    console.log(replies, "replies" )
    function sendReply() {
        frontendAddReply(post, i)
    }
    return <StyledPost key={i} last={last}>
        <div className="name">{post.User.name}  <span className="timestamp">1 month ago</span></div>
        <div className="content">{post.content}</div>
        {<Replies {...{ replies, sendReply }} />}
    </StyledPost>
}
function Replies({ replies, sendReply }) {
    const [formOpen, setFormOpen] = useState(false)
    const [open, setOpen] = useState(false)
    function ReplyForm() {
        return <div><input /><br />
            <Button onClick={() => setFormOpen(false)}>cancel</Button>
            <Button onClick={() => sendReply()}>reply</Button>
        </div>
    }
    const n = replies?.Thread?.Posts?.scannedCount
    return <div>
        <div className="actions">
            <Button onClick={() => {
                setFormOpen((e) => !e)
            }}>reply</Button> <Icon>thumb_up_off_alt</Icon><Icon>thumb_down_off_alt</Icon>
        </div>
        {formOpen ? <ReplyForm /> : ""}
        {replies?.Thread ?
            open ? <div>replies:
                <ThreadUi {...{ Thread: replies,discussion:replies, isReply: true }} />
                <Button onClick={() => setOpen(false)}>hide {n} replies</Button>
            </div>
                : <Button onClick={() => setOpen(true)}>show {n} replies</Button>
            : ""
        }
    </div>
}