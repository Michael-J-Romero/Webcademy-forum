import * as queries from '../../graphql/queries';
import { API, graphqlOperation } from "aws-amplify";
import { send,get } from "./utilities"
const getDiscussion = async function () {
    // const response = await API.graphql({ 
    //     query: queries.getDiscussion, 
    //     variables: { 
    //         id: 'bf290107-dc18-40b6-8b18-3235833c81e6' 
    //     }
    // });
    const response = await API.graphql(graphqlOperation(` 
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
  
`))
    return response
}
const getUser = async function (id) {
    if (!id)return
    const response = await  get(queries.getUser, {
        id
    })
    console.log(response)
    return response
}

export { getDiscussion,getUser }
