import * as queries from '../../graphql/queries';
import { API, graphqlOperation } from "aws-amplify";
import { send,get } from "./utilities"
const getDiscussionInfo = async function (threadId,nextToken) {
 
  const q1=`
  query MyQuery {
    DiscussionByThread(threadID: "${threadId}") {
      items {
        content
        id
        title
        threadID
        Thread{
          count
        }
        User {
          name
        }
      }
    }
  }
  `
  
    const response = await API.graphql({
      query: q1,
      variables:{},
      // authMode: "AMAZON_COGNITO_USER_POOLS"
    });
    
 let dd=response.data.DiscussionByThread.items[0]
   return dd
    // return response.data.listDiscussions.items[0]
}
const getDiscussion = async function (threadId,nextToken) {
  // const response = await API.graphql({ 
  //     query: queries.getDiscussion, 
  //     variables: { 
  //         id: 'bf290107-dc18-40b6-8b18-3235833c81e6' 
  //     }
  // });

const q1=`
query MyQuery {
  DiscussionByThread(threadID: "${threadId}") {
    items {
      content
      title
      threadID
      User {
        name
      }
    }
  }
}
`
const q2=`
query MyQuery {
  postsByThreadAndDate(
    threadID: "${threadId}",
    ${nextToken?'nextToken:"' + nextToken+'",':""}
    limit: 15, sortDirection: DESC
    ) {
    scannedCount
    nextToken
    items {
      content
      replyCount

      createdAt
      id
      ReplyThread {
        id
        Thread {
          id
          Posts {
            scannedCount
            
          }
        }
      }
    
      User {
        id
        name
      }
    }
  }
}

`
// items {
//               content
//               User {
//                 name
//                 id
//               }
//             }
  const response = await API.graphql({
    query: q1,
    variables:{},
    // authMode: "AMAZON_COGNITO_USER_POOLS"
  });
  const response2 = await API.graphql({
    query: q2,
    variables:{},
    // authMode: "AMAZON_COGNITO_USER_POOLS"
  });
  // const response = await API.graphql(graphqlOperation(q1))
  // const response2 = await API.graphql(graphqlOperation(q2),)

  console.log(response,response2);
  /* 
  add vote data into post table
  add user data into post table
  query reply threads separately
  query discussions separately  from posts
type: String! @index(name: "postsByDate", queryField: "postsByDate", sortKeyFields: ["createdAt"])

  vote table: hashKey = post, sort = user, fields = {value:1} // [-1,0,1]

  vote(postid)
  getDiscussions(category,depth)
  getPosts(discussion,limit)
  post(threadid)
  getUserInfo(userid)
  getNotifications()
  sendNotification()
  getMessages()
  sendMessage()
query MyQuery {
  listDiscussions {
    items {
      content
      title
      User {
        name
      }
      Thread {
        id
        Posts {
          items {
            content
            createdAt
            DownVotes {
              Users {
                items {
                  user {
                    name
                    id
                  }
                }
              }
            }
            ReplyThread {
              Thread {
                Posts {
                  items {
                    createdAt
                    content
                    DownVotes {
                      Users {
                        items {
                          user {
                            id
                            name
                          }
                        }
                      }
                    }
                    UpVotes {
                      Users {
                        items {
                          user {
                            id
                            name
                          }
                        }
                      }
                    }
                    User {
                      name
                      id
                    }
                  }
                }
              }
            }
            UpVotes {
              Users {
                items {
                  user {
                    id
                    name
                  }
                }
              }
            }
            User {
              id
              name
            }
          }
        }
      }
    }
  }
}
"Cannot query field "postsByDate" on type "Query". Did you mean "postsByThreadAndDate"?"
*/
let dd=response.data.DiscussionByThread.items[0]
console.log(dd)
dd.Thread={Posts:response2.data.postsByThreadAndDate  }
return dd
  // return response.data.listDiscussions.items[0]
}
const getDiscussionPosts = async function (threadId,nextToken) { 
  const q2=`
  query MyQuery {
    postsByThreadAndDate(
      filter: {not: {content: {eq: "post deleted"}}}
      threadID: "${threadId}",
      ${nextToken?'nextToken:"' + nextToken+'",':""}
      limit: 15, sortDirection: DESC
      ) {
      scannedCount
      nextToken
      items {
        content
        replyCount

        createdAt
        id
        ReplyThread {
          id
          Thread {
            id
            count
            Posts {
              scannedCount
            
            }
          }
        }
      
        User {
          id
          name
        }
      }
    }
  }
  
  `
    // items {
    //             content
    //             User {
    //               name
    //               id
    //             }
    //           }
  const response2 = await API.graphql({
    query: q2,
    variables:{},
    authMode: "AMAZON_COGNITO_USER_POOLS"
  }); 

  // let dd=response.data.DiscussionByThread.items[0]
  // console.log(dd)
  // dd.Thread={Posts:response2.data.postsByThreadAndDate  }
  // return dd
return {Thread:{Posts:response2.data.postsByThreadAndDate}}
return response2.data.postsByThreadAndDate.items[0]
  // return response.data.listDiscussions.items[0]
} 
const getUser = async function (id) {
    if (!id)return
    const response = await  get(queries.getUser, {
        id
    })
    console.log(response)
    return response
}
const getDiscussionsByCategory = async function (id) {
    if (!id)return
     const q2 = `   query MyQuery {
      DiscussionByCategory(category: "${id}") {
        nextToken
        items {
          threadID
                content
      title
        }
      }
    }`
    const response = await API.graphql({
    query: q2,
    variables:{},
    authMode: "API_KEY"
  });

    return response
}

export {getDiscussionInfo, getDiscussion,getUser,getDiscussionPosts,getDiscussionsByCategory }
