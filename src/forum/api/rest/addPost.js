 
import { API } from 'aws-amplify';


export default(queryClient,threadID)=>{
async function addPost({user,input}) {
    const apiName = 'api2';
    const path = '/posts';
    
         const token = user.signInUserSession.idToken.jwtToken
          const response = await API.post(apiName, path,{
            headers: {
              Authorization: token
            },
            body:{path:"addPost",input}
          })
          if(response.error){
            throw(response.error)
          }
            console.log(response,'responsee')
            return response
        //   .catch(error => {
        //     console.log('unauthorized',error);
        //   });
    }
const options =  {
    onError: (err, newPost, context) => {
        console.log(err, "error",err.error)
        alert(err||"couldn't complete request. Please try again")
        //     queryClient.setQueryData('getDiscussion', context.previousDiscussion);
    },
    onSuccess: async (data) => {
        console.log(data)
        const newPost = {...data,
            User:{name:data.username},
            replyCount:0,
            ReplyThread:{Thread:{

                id:data.postReplyThreadId,
                Posts:{
                    scannedCount:0,
                    items:[]
                }
            }
        }
        }
        console.log({newPost,data})
        queryClient.setQueryData(['getDiscussionInfo', threadID], (old) => {
            console.log(old)
            old.Thread.count++
            return old 
        });
        queryClient.setQueryData(['getDiscussion', threadID], (old) => {
            console.log(old.pages[0])
            const oldPosts = old.pages[0].Thread.Posts.items
            const updated = { ...old.pages[0] }
            updated.Thread = { ...updated.Thread }
            updated.Thread.Posts = { ...updated.Thread.Posts }
            updated.Thread.Posts.items = [newPost, ...oldPosts]


            // queryClient.invalidateQueries('getDiscussion')
            return { ...old, pages: [updated, ...old.pages.slice(1)] }
        });
    },
}
return [addPost,options]
}
// export{addPost,options}