import * as mutations from '../../graphql/mutations';
import {send} from "./utilities"
/* 
    "@testing-library/jest-dom": "^5.16.4",
    "@testing-library/react": "^13.3.0",
    "@testing-library/user-event": "^13.5.0",
   
     */
async function addDiscussion({ title, content,userId }) {
    const discussionThreadId = await addThread()
    const discussionid = await send(mutations.createDiscussion, {
        content,
        discussionUserId:userId,
        title,
        discussionThreadId
    })
    return discussionThreadId
}
async function addReply({ content, postid, userId }) {
    //createNew replythread
    const threadID = await addThread()
    const replyThread = await send(mutations.createReplyThread, {
        replyThreadThreadId: threadID
    })
    //add replythread to post
    send(mutations.updatePost, {
        id: postid, postReplyThreadId: replyThread.data.createReplyThread.id
    })
    //add reply post to replythread
    const newpostid = await addPost({ postUserId: userId, threadID, content })
    return threadID
}

async function addThread() {
    const result = await send(mutations.createThread, {})
    return result.data.createThread.id
}
async function addUser({name,id}) {
    const input ={ name}
    if (id){input.id = id}
    const result = await send(mutations.createUser, input)
    return result.data.createUser.id
}
async function addPost({ postUserId, content, threadID }) {
    const result = await send(mutations.createPost, {
        threadID, content, postUserId
    })
    return result.data.createPost.id

}


export {addDiscussion,addUser,addReply,addPost}