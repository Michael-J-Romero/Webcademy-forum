import {createMutator,editPagePosts} from './utilities'
import createModel from './models'
export default (queryClient, p) => {
    let onSuccess=(data,input)=>{
        const {threadID} = input.input.body
        const {postIndex,parentThreadID,postPageIndex} = input.input
        const newPost = createModel('post',data)
        queryClient.setQueryData(['getReply', threadID], (discussion) => {
            console.log(discussion);
            if(!discussion){ return undefined}
            return editPagePosts(discussion,0 ,
            (posts)=>  [newPost, ...posts]
            )
        });
        queryClient.setQueryData(['getDiscussion', parentThreadID], (discussion) => { 
            if (!discussion){ return}
            return editPagePosts(discussion,postPageIndex,null,
            (postsData)=>{
                const thread = postsData.Posts.items[postIndex].ReplyThread.Thread
                if (thread.count == null){
                    thread.count = 1
                }
                else thread.count++
                return postsData
            }
            )
        });
        queryClient.invalidateQueries(['getReply', threadID])
    }
    return createMutator('api2','/posts',"addReply",{onSuccess})
}

    // const addReplyMutation = useMutation(({ input }) => addReply(input),
    //     {
        
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