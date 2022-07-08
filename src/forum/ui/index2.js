// import Discussion from "./mock/discussion.json"
import { getDiscussion, getDiscussionPosts, getDiscussionsByCategory } from "../api/get"
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { addDiscussion, addUser, addReply, addPost } from "../api/set"
import { Button, Input, Icon, TextField } from "@mui/material"
import { forumStructure } from '../api/initializers'
import {
    useQuery,
    useMutation,
    useQueryClient,
} from 'react-query'
export default Forum
let theme = {
    w: '750px'
}
const StyledForum = styled.div`
background: #091a27;
    padding: 40px;

`
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
const StyledSelectD = styled.div`
margin:auto;
display:flex;
flex-direction: column;
padding: 20px;
align-items: stretch;
text-align: left;
background: #212121;
max-width: ${theme.w};
& .discussion-button{
    border: 1px solid #3c3c3c;
    display: block;
    padding: 8px;
    cursor: pointer;
    margin-top: 2px;
    background:#333;
    &.discussion{
        background:#444;
    }
    transition-duration: 300ms;
    &:hover{
        background:#555;
    }
} 
& .discussion-bar{
    display:flex;

    & .discussion-path{
    } 
    & div{
        padding:8px;
    } 
} 
`
const StyledBar = styled.div`
margin:auto;
display:flex;
flex-direction: column;
padding: 20px;
align-items: stretch;
text-align: left;
background: #212121;
max-width: ${theme.w};
& .discussion-button{
    border: 1px solid #3c3c3c;
    display: block;
    padding: 8px;
    cursor: pointer;
    margin-top: 2px;
    background:#333;

    transition-duration: 300ms;
    &:hover{
        background:#555;
    }
} 
& .discussion-bar{
    display:flex;

    & .discussion-path{
    } 
    & div{
        padding:8px;
    } 
} 
`
// & .discussion-back{
//     display:block;
//     background:#333;
// } 
function Forum({ user }) {
    const query = useQuery('getDiscussion', () => { return getDiscussion("6befdcbe-9e96-4d0b-b203-6fd7b74ecbfb") })
    let [category, setCategory] = useState(forumStructure)
    const [discussion, setDiscussion] = useState()
    function getDiscussionData(i) {
        getDiscussion(i).then((d) => {
            let discussion = d
            setDiscussion(discussion)
        })
    }
    function frontendAddPost(input) {
        addPost({ ...input, postUserId: user.attributes.sub, })
            .then((post) => {
                setDiscussion((d) => {
                    let discussion = { ...d }
                    discussion.Thread.Posts.items.push(post)
                    return discussion
                })
            })
    }
    function frontendAddReply(post, postIndex) {
        const threadID = post.ReplyThread?.Thread?.id
        console.log(threadID, post)
        addReply({
            postId: post.id,
            content: "test testreply to second post",
            threadID,
            userId: user.attributes.sub
        }).then((reply) => {
            setDiscussion((d) => {
                let discussion = { ...d }
                const replyThread = discussion.Thread.Posts.items[postIndex].ReplyThread.Thread
                if (!replyThread.Posts) { replyThread.Posts = { items: [] } }
                replyThread.Posts.items.push(reply)
                console.log(discussion, "discussion", reply, replyThread)
                return discussion
            })
            // updateReplyCount
            console.log("created reply", reply)
        })

    }
    console.log(query.data, "here9")
    return <StyledForum>
        {query.isLoading ? "loading" : query.data.Thread.Posts.items.map(discussion => {
            console.log(discussion, "here9")
            return (
                <li key={discussion.id}>{discussion.content}</li>
            )
        })}
        <Bar {...{ category, setCategory }} />
        {category.children ?
            <DiscussionSelect {...{ getDiscussionData, category, setCategory, discussion, setDiscussion }} />
            :
            <Discussion {...{ getDiscussionData, discussion, user, frontendAddPost, frontendAddReply }} />

        }
    </StyledForum>

}
function Bar({ category, setCategory }) {
    let path = getPath(category)

    return <StyledBar>
        <div className="discussion-bar">
            <div className="discussion-button"
                onClick={() => {
                    if (category.parent)
                        setCategory(category.parent)
                }}>
                back
            </div>
            <div className="discussion-path">
                {path.reverse().join(' / ')}
            </div>
        </div>
    </StyledBar>
}
function getPath(category) {
    let path = []
    let c = category
    if (c.title == 'root') path.push('forum')
    else path.push(c.title)
    let cc = 0
    while (c.parent && cc < 2) {
        cc++

        c = c.parent
        if (c.title == 'root') path.push('forum')
        else path.push(c.title)
    }
    if (c.parent) path.push('... ')
    return path
}
function DiscussionSelect({ getDiscussionData, category, setCategory, discussion, setDiscussion }) {
    const { children } = category
    const [discussions, setDiscussions] = useState([])


    useEffect(() => {
        setDiscussion()
        console.log("mount discussion select", category)
    }, [])
    useEffect(() => {
        console.log("category changed2 ", category)
        setDiscussions([])
        getDiscussionsByCategory(category.id).then((discussions) => {
            const d = discussions.data.DiscussionByCategory.items

            setDiscussions((discussions) => d.map((e) => ({ ...e, parent: category, type: "discussion" })))
        })
    }, [category])
    const content = [...children.filter((e) => e.type == "category"), ...discussions]
    let path = getPath(category)
    return <StyledSelectD>
        {content ?
            content.map((e, i) =>
                <div className={"discussion-button " + e.type}
                    onClick={() => {

                        if (e.type == "discussion") {

                            getDiscussionData(e.threadID)
                            // setPageType("discussion")
                        }
                        setCategory(content[i])
                    }}>
                    {e.title} {e.content ? <><br />{e.content}</> : ''}
                </div>)
            : 'leaf'}
    </StyledSelectD>
}
function Collection({ children }) {
    return <StyledCollection>
        {children}
    </StyledCollection>
}
function Discussion({ getDiscussionData, discussion, user, frontendAddPost, frontendAddReply }) {
    const { title, content, Thread } = discussion || {}
    const [text, setText] = useState("")
    useEffect(() => {
        console.log("Mount discussion ", discussion)
        // getDiscussionData(discussion.id)
    }, [])
    console.log("render discussion", discussion)
    return <>{discussion ? <StyledDiscussion>
        <div >
            <span className="title"> {title} </span>
            <span className="timestamp">posted by {discussion.User.name}  1 month ago</span>
        </div>
        <div className="content">{content}</div>
        <textarea value={text} onChange={(e) => setText(e.target.value)}
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
        <ThreadUi {...{ Thread, discussion, frontendAddReply }} />
    </StyledDiscussion>
        : <div>loading</div>}
    </>
}
function ThreadUi({ Thread, isReply, discussion, frontendAddReply }) {
    console.log(Thread)
    const { items: posts } = Thread.Posts
    // const postst = posts.map((e)=>Date.parse(e.createdAt))
    posts.sort((aa, bb) => {
        const a = Date.parse(aa.createdAt)
        const b = Date.parse(bb.createdAt)

        return a > b ? -1 : a == b ? 0 : 1
    })
    // postst.sort((a,b)=>a>b?1:a == b?0:-1)

    return <Collection>
        {posts.map((post, i) => <Post {...{ frontendAddReply, i, post, isReply, last: i == posts.length - 1 }} />)}

    </Collection>
}
function Post({ post, last, isReply, i, frontendAddReply }) {
    let replies
    replies = post.ReplyThread?.Thread
    console.log(replies, "replies", replies?.id)
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
    const n = replies?.Posts?.scannedCount
    return <div>
        <div className="actions">

            <Button onClick={() => {
                setFormOpen((e) => !e)
            }}>reply</Button> <Icon>thumb_up_off_alt</Icon><Icon>thumb_down_off_alt</Icon>
        </div>
        {formOpen ? <ReplyForm /> : ""}
        {replies ?
            open ? <div>replies:
                <ThreadUi {...{ Thread: replies, isReply: true }} />
                <Button onClick={() => setOpen(false)}>hide {n} replies</Button>
            </div>
                : <Button onClick={() => setOpen(true)}>show {n} replies</Button>
            : ""
        }
    </div>
}