// import Discussion from "./mock/discussion.json"
import { getDiscussion, } from "../api/get"
import React, { useState } from 'react';
import { addReply, addPost } from "../api/set"
import { forumStructure } from '../api/initializers'
import { useQuery, } from 'react-query'
import Layout from "./layout"
import DiscussionSelect from "./discussionSelect"
import Discussion from "./discussion"
export default Forum


function Forum({ user }) {
    let [category, setCategory] = useState(forumStructure)
    const [discussion, setDiscussion] = useState()
    const [scrolledToBottom,setScrolledToBottom]= useState(false)
    function getDiscussionData(i) {
        getDiscussion(i).then((d) => {
            let discussion = d
            setDiscussion(discussion)
        })
    }
    // function frontendAddPost(input) {
    //     addPost({ ...input, postUserId: user.attributes.sub, })
    //         .then((post) => {
    //             setDiscussion((d) => {
    //                 let discussion = { ...d }
    //                 discussion.Thread.Posts.items.push(post)
    //                 return discussion
    //             })
    //         })
    // }
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
    // const test = query.isLoading ? "loading" : query.data.Thread.Posts.items.map(discussion => {
    //     console.log(discussion, "here9")
    //     return (
    //         <li key={discussion.id}>{discussion.content}</li>
    //     )
    // })
    console.log(category)
    return <Layout {...{ category, setCategory,setScrolledToBottom,scrolledToBottom }}>
        {/* {test} */}
        {category.type == "category" ?
            <DiscussionSelect {...{ getDiscussionData, category, setCategory, discussion, setDiscussion }} />
            :
            <Discussion {...{scrolledToBottom,threadID:category.threadID, getDiscussionData, discussion, user, frontendAddReply }} />
        }
    </Layout>
}


