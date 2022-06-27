import { API } from "aws-amplify";
import * as mutations from '../graphql/mutations';
//await async
async function initiate() {
    const userIds = []
    const users = ["Michael", "Trixie", "Megan"]
    console.log("started initializing")
    for (const e of users) {
        const i = await addUser(e)
        console.log(i)
        userIds.push(i)
    }
    console.log("created users",userIds)
    const threadID = await addDiscussion({
        userId: userIds[0],
        title: "test discussion",
        content: "content for discussion"
    })
    console.log("created thread")
    addPost({ postUserId: userIds[1], threadID, content: "first post" })
    const postid = await addPost({ postUserId: userIds[2], threadID, content: "second post" })
    console.log("created posts")
    addReply({
        content: "reply to second post",
        postid,
        userId: userIds[0]
    })
    console.log("created reply")
}
async function addDiscussion({ title, content,userId }) {
    const discussionThreadId = await addThread()
    const discussionid = await create(mutations.createDiscussion, {
        content,
        discussionUserId:userId,
        title,
        discussionThreadId
    })
    return discussionThreadId
}
async function addThread() {
    const result = await create(mutations.createThread, {})
    return result.data.createThread.id
}
async function addUser(name) {
    const result = await create(mutations.createUser, { name })
    return result.data.createUser.id
}
async function addPost({ postUserId, content, threadID }) {
    const result = await create(mutations.createPost, {
        threadID, content, postUserId
    })
    return result.data.createPost.id

}
async function addReply({ content, postid, userId }) {
    //createNew replythread
    const threadID = await addThread()
    const replyThread = await create(mutations.createReplyThread, {
        replyThreadThreadId: threadID
    })
    //add replythread to post
    create(mutations.updatePost, {
        id: postid, postReplyThreadId: replyThread.data.createReplyThread.id
    })
    //add reply post to replythread
    const newpostid = await addPost({ postUserId: userId, threadID, content })
    return threadID
}
async function create(mutation, input) {
    const result = await API.graphql({
        query: mutation,
        variables:{input}
    });
    return result
}

export default initiate