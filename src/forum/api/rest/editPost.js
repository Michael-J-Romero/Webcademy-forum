import {createMutator,editPagePosts} from './utilities'
export default (queryClient, p) => {
    let onSuccess=(data,input)=>{
        const {postIndex,threadID,pageIndex} = input.input
        const {content} = input.input.body
        queryClient.setQueryData(['getDiscussion', threadID], (discussion) => { 
            console.log(discussion);
            return editPagePosts(discussion,pageIndex,(posts)=>{
                posts[postIndex].content=content
                return posts
            })
        });
    }
    return createMutator('api2','/posts',"editPost",{onSuccess})
}
