// import Discussion from "./mock/discussion.json"
import { getDiscussion } from "./api/get"
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { addDiscussion, addUser, addReply, addPost } from "./api/set"
import{Button,Input,Icon,TextField} from "@mui/material"
export default Forum

const StyledForum = styled.div`
background:gray;
padding:12px

`
const StyledDiscussion = styled.div`
& textarea{
    background: #d8d8d8;
    width: 349px;
    height: 62px;
    color: #131313;
    border-radius: 4px;
}
background: black;
    text-align: left;
padding:8px;
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
${last ? "" : "border-bottom: 1px solid white;"}
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
function Forum({ user}) {
    const [discussion, setDiscussion] = useState()
    function refreshData() {
        getDiscussion().then((d) => {
            let discussion = d.data.listDiscussions.items[0]
            console.log(discussion,"discussion")
            setDiscussion(discussion)
        })
    }
    useEffect(() => {
        refreshData()
    }, [])
    return discussion ? <StyledForum>
        <Discussion {...{ discussion,user,refreshData }} />
    </StyledForum>
        : <div>loading</div>
}

function Collection({ children }) {
    return <StyledCollection>
        {children}
    </StyledCollection>
}
function Discussion({ discussion ,user,refreshData}) {
    const { title, content, Thread } = discussion
    const [text,setText] = useState("")
    console.log(discussion)
    return <StyledDiscussion>
        <div >
            <span className="title"> {title} </span> 
            <span className = "timestamp">posted by {discussion.User.name}  1 month ago</span>
            </div>
        <div className="content">{content}</div>
        <textArea value={text} onChange = {(e)=>setText(e.target.value)}
  placeholder="Type your response here"
  multiline
  rows={2}
  maxRows={40}
/>
        <Button onClick = {()=>{
            console.log(Thread,discussion,{ postUserId:user.username, content:text, threadID:Thread.id })
            addPost({ postUserId:user.attributes.sub, content:text, threadID:Thread.id })
            .then(()=>{
                refreshData()
            })
        }}>new comment<Icon>add</Icon></Button>
        <ThreadUi {...{ Thread }} />
    </StyledDiscussion>
}
function ThreadUi({ Thread, isReply }) {
    const { items: posts } = Thread.Posts
    // const postst = posts.map((e)=>Date.parse(e.createdAt))
    posts.sort((aa,bb)=>{
        const a = Date.parse(aa.createdAt)
        const b = Date.parse(bb.createdAt)
        console.log(a,b)
        return a>b?-1:a == b?0:1
    })
    // postst.sort((a,b)=>a>b?1:a == b?0:-1)
    console.log(posts)
    return <Collection>
        {posts.map((post, i) => <Post {...{i, post, isReply, last: i == posts.length - 1 }} />)}

    </Collection>
}
function Post({ post, last, isReply,i }) {
    let replies
    replies = post.ReplyThread?.Thread
    console.log(post)
    return <StyledPost key = {i} last={last}>
        <div className="name">{post.User.name}  <span className = "timestamp">1 month ago</span></div>
        <div className="content">{post.content}</div>
        {isReply ? "" : <Reply {...{ replies }} />}
    </StyledPost>
}
function Reply({ replies }) {
    const [open, setOpen] = useState(false)
    const n = replies?.Posts?.items?.length
    return <div>
        <div className = "actions">
            <Button>reply</Button> <Icon>thumb_up_off_alt</Icon><Icon>thumb_down_off_alt</Icon>
            </div>
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