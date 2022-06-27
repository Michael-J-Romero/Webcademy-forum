import { addDiscussion, addUser, addReply, addPost } from "./set"

async function initiate() {
    const userIds = []
    const users = ["Michael", "Trixie", "Megan"]
    console.log("started initializing")
    for (const name of users) {
        const i = await addUser({name})
        userIds.push(i)
    }
    console.log("created users", userIds)
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
export { initiate }