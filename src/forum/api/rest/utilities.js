import { API } from 'aws-amplify';

function createMutator (apiName,path,route,{onSuccess},queryClient, threadID)  {
    async function addPost({ user, input }) { 
        const token = user.signInUserSession.idToken.jwtToken
        const response = await API.post(apiName, path, {
            headers: {
                Authorization: token
            },
            body: { path: route, input:input.body }
        })
        if (response.error) {
            throw (response.error)
        }
        // console.log(response, 'responsee')
        return response
        // .catch(error => {
        // console.error('unauthorized',error);
        // });
    }
    const options = {
        onError: (err, newPost, context) => {
            console.error(err, "error", err.error)
            alert(err || "couldn't complete request. Please try again")
            // queryClient.setQueryData('getDiscussion', context.previousDiscussion);
        },
        onSuccess: async (data,variables) => {
             onSuccess(data,variables)
        },
    }
    return [addPost, options]
}
function editPagePosts(discussion,page,postsAction,postDataAction) {
    console.log(discussion,"oldPostData")
    let oldPostData = {...(discussion.pages[page].Thread)}
    if (postDataAction)oldPostData=postDataAction(oldPostData)
    let oldPosts = [...oldPostData.Posts.items] 
    if (postsAction)oldPosts=postsAction(oldPosts)
    const updated = { ...discussion.pages[page] }
    updated.Thread = { ...updated.Thread }
    updated.Thread.Posts = { ...updated.Thread.Posts }
    updated.Thread.Posts.items = oldPosts
    return { ...discussion, pages: [...discussion.pages.slice(0,page),updated, ...discussion.pages.slice(page + 1 )] }
}
export{createMutator,editPagePosts}