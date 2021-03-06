import * as mutations from '../../graphql/mutations';
import {send} from "./utilities"
/* 
    "@testing-library/jest-dom": "^5.16.4",
    "@testing-library/react": "^13.3.0",
    "@testing-library/user-event": "^13.5.0",
   
     */
async function addDiscussion({ title, content,userId,threadID,category }) {
    console.log(threadID,'diaaaaaascussionThreadId')
    if(!threadID) threadID = await addThread()
    console.log(category,'discussionThreadId')
    const discussionid = await send(mutations.createDiscussion, {
        content,
        discussionUserId:userId,
        title,
        category,
        threadID
    })
    return threadID
}
async function addReply({ content, threadID, user,postId }) {
    
    //add reply post to replythread
    const reply =  await addPost({user, threadID, content })
  
        console.log(reply,"here2")
        // const count = getPostsByThread()
        send(mutations.updatePost, {
            id:postId,
            replyCount:2
        })
    return reply
}
async function addReply2({ content, postid, userId }) {
    //createNew replythread
    const threadID = await addThread()
    const replyThread = await send(mutations.updatePost, {
        replyThreadThreadId: threadID
    })
    console.log({id: postid, postReplyThreadId: replyThread.data.createReplyThread.id})
    //add replythread to post
    send(mutations.updatePost, {
        id: postid, postReplyThreadId: replyThread.data.createReplyThread.id
    }).then((e)=>{
        console.log(e,"here")
    })
    //add reply post to replythread
    const newpostid = await addPost({ postUserId: userId, threadID, content })
    .then((e)=>{
        console.log(e,"here2")
    })
    return threadID
}
async function addReplyThread(  postid ) {
    //createNew replythread
    const threadID = await addThread()
    const replyThread = await send(mutations.createReplyThread, {
        replyThreadThreadId: threadID
    })
    console.log({id: postid, postReplyThreadId: replyThread.data.createReplyThread.id})
    //add replythread to post
    send(mutations.updatePost, {
        id: postid, postReplyThreadId: replyThread.data.createReplyThread.id
    }).then((e)=>{
        console.log(e,"here")
    })
    return threadID
}

async function addThread(i) {
    const result = await send(mutations.createThread,{id:i})//, {id:i}
    return result.data.createThread.id
}
async function addUser({name,id}) {
    const input ={ name}
    if (id){input.id = id}
    const result = await send(mutations.createUser, input)
    return result.data.createUser.id
}
// async function addPost({ postUserId, content, threadID }) {
//     const result = await send(mutations.createPost, {
//         threadID, content, postUserId
//     })
//     //add reply thread
//  console.log(result)
//     addReplyThread(result.data.createPost.id)
//     return result.data.createPost

// }
async function addPost({threadID, user, content }) {
    console.log(11);
    const postUserId = user.attributes.sub
    console.log(112);
    const postId = unique()
    const newthreadID = unique()
    const replyThreadID = unique()
    await send(mutations.createThread, { id: newthreadID })//, {id:i}
    await send(mutations.createReplyThread, { replyThreadThreadId:newthreadID,id: replyThreadID })
    const post = {
        threadID, content, postUserId,
        id: postId,
        postReplyThreadId: replyThreadID
    }
    const result = await send(mutations.createPost, post)
    // await mutations.updatePost, {
    //     id: postId, postReplyThreadId: replyThreadID
    // }
    console.log(user)
    post.User = { name: user.username }
    console.log(post)
    return post
}
function unique() {
    return Date.now() + Math.round(Math.random()*100)
}
export {addDiscussion,addUser,addReply,addPost}