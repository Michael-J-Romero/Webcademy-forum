import {createMutator,editPagePosts} from './utilities'
export default (queryClient, p) => {
    let onSuccess=(data,input)=>{
        const {threadID,postIndex,pageIndex} = input.input
        console.log(pageIndex);
        queryClient.setQueryData(['getDiscussionInfo', threadID], (old) => {
            old.Thread.count--
            return old
        });            
        queryClient.setQueryData(['getDiscussion', threadID], (discussion) => { 
            return editPagePosts(discussion,pageIndex,(posts)=>{
                posts.splice(postIndex,1)
                return posts
            })
        });
    }
    return createMutator('api2','/posts',"deletePost",{onSuccess})
}
