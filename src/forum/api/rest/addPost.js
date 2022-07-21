import {createMutator,editPagePosts} from './utilities'
import createModel from './models'
export default (queryClient, p) => {
    let onSuccess=(data,input)=>{
        const {threadID} = input.input.body
        const newPost = createModel('post',data)
        queryClient.setQueryData(['getDiscussionInfo', threadID], (old) => {
            old.Thread.count++
            return old
        });
        queryClient.setQueryData(['getDiscussion', threadID], (discussion) => {
            return editPagePosts(discussion,0,(posts)=>{
                return [newPost, ...posts]
            }) 
        });
    }
    return createMutator('api2','/posts',"addPost",{onSuccess})
}