// import Discussion from "./mock/discussion.json"
import { getDiscussion, getDiscussionPosts, getDiscussionsByCategory } from "./api/get"
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { addDiscussion, addUser, addReply, addPost } from "./api/set"
import { Button, Input, Icon, TextField } from "@mui/material"
import { forumStructure } from './api/initializers'
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
    let [category, setCategory] = useState(forumStructure)
    const [discussion, setDiscussion] = useState()
    function getDiscussionData(i) {
        getDiscussion(i).then((d) => {
            let discussion = d
            setDiscussion(discussion)
        })
    }
    // function refreshPosts() {
    //     getDiscussionPosts(discussion.threadID).then((p) => {
    //         let posts = { ...p }
    //         setDiscussion((discussion) => {
    //             discussion.Thread.Posts = posts
    //         })
    //     })
    // }
    function frontendAddPost(post) {
        setDiscussion((d) => {
            let discussion = { ...d }
            discussion.Thread.Posts.items.push(post)
            return discussion
        })
    }

    return <StyledForum>
        <Bar {...{ category, setCategory }} />
        {category.children ?
            <DiscussionSelect {...{getDiscussionData, category, setCategory, discussion, setDiscussion }} />
            :
            <Discussion {...{ getDiscussionData, discussion, user, frontendAddPost }} />

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
        console.log(c);
        c = c.parent
        if (c.title == 'root') path.push('forum')
        else path.push(c.title)
    }
    if (c.parent) path.push('... ')
    return path
}
function DiscussionSelect({getDiscussionData, category, setCategory, discussion, setDiscussion }) {
    const { children } = category
    const [discussions, setDiscussions] = useState([])
    console.log(children)

    useEffect(() => {
        setDiscussion()

    }, [])
    useEffect(() => {
        setDiscussions([])
        getDiscussionsByCategory(category.id).then((discussions) => {
            const d = discussions.data.DiscussionByCategory.items
            console.log(discussions, d)
            setDiscussions((discussions) => d.map((e) => ({ ...e,parent:category,type : "discussion" })))
        })
    }, [category])
    const content = [...children.filter((e)=>e.type == "category"),...discussions]
    let path = getPath(category)
    return <StyledSelectD>
        {content ?
            content.map((e, i) =>
                <div className="discussion-button"
                    onClick={() => { 
                        console.log(e)
                        if (e.type == "discussion"){
                            console.log(e.threadID,"e.threadID")
                            getDiscussionData(e.threadID)
                            // setPageType("discussion")
                        }
                        setCategory(content[i]) 
                        }}>
                    {e.title}
                </div>)
            : 'leaf'}
    </StyledSelectD>
}
function Collection({ children }) {
    return <StyledCollection>
        {children}
    </StyledCollection>
}
function Discussion({ getDiscussionData, discussion, user,   frontendAddPost }) {
    const { title, content, Thread } = discussion || {}
    const [text, setText] = useState("")
    useEffect(() => {
        // getDiscussionData(discussion.id)
    }, [])
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
            // refreshData()

            addPost({ postUserId: user.attributes.sub, content: text, threadID: discussion.threadID })
                .then((post) => {

                    // setTimeout(() => {
                    // refreshData()
                    // refreshPosts(post)
                    frontendAddPost(post)
                    // }, 6000);
                })
        }}>new comment<Icon>add</Icon></Button>
        <ThreadUi {...{ Thread }} />
    </StyledDiscussion>
        : <div>loading</div>}
    </>
}
function ThreadUi({ Thread, isReply }) {
    const { items: posts } = Thread.Posts
    // const postst = posts.map((e)=>Date.parse(e.createdAt))
    posts.sort((aa, bb) => {
        const a = Date.parse(aa.createdAt)
        const b = Date.parse(bb.createdAt)

        return a > b ? -1 : a == b ? 0 : 1
    })
    // postst.sort((a,b)=>a>b?1:a == b?0:-1)

    return <Collection>
        {posts.map((post, i) => <Post {...{ i, post, isReply, last: i == posts.length - 1 }} />)}

    </Collection>
}
function Post({ post, last, isReply, i }) {
    let replies
    replies = post.ReplyThread?.Thread

    return <StyledPost key={i} last={last}>
        <div className="name">{post.User.name}  <span className="timestamp">1 month ago</span></div>
        <div className="content">{post.content}</div>
        {isReply ? "" : <Reply {...{ replies }} />}
    </StyledPost>
}
function Reply({ replies }) {
    const [open, setOpen] = useState(false)
    const n = replies?.Posts?.items?.length
    return <div>
        <div className="actions">
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