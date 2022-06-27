/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
      id
      threadID
      content
      User {
        id
        name
        upvotess {
          items {
            id
            upVotesID
            userID
            upVotes {
              id
              handle
              Users {
                items {
                  id
                  upVotesID
                  userID
                  upVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            user {
              id
              name
              upvotess {
                items {
                  id
                  upVotesID
                  userID
                  upVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              downvotess {
                items {
                  id
                  downVotesID
                  userID
                  downVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        downvotess {
          items {
            id
            downVotesID
            userID
            downVotes {
              id
              handle
              Users {
                items {
                  id
                  downVotesID
                  userID
                  downVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            user {
              id
              name
              upvotess {
                items {
                  id
                  upVotesID
                  userID
                  upVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              downvotess {
                items {
                  id
                  downVotesID
                  userID
                  downVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      UpVotes {
        id
        handle
        Users {
          items {
            id
            upVotesID
            userID
            upVotes {
              id
              handle
              Users {
                items {
                  id
                  upVotesID
                  userID
                  upVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            user {
              id
              name
              upvotess {
                items {
                  id
                  upVotesID
                  userID
                  upVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              downvotess {
                items {
                  id
                  downVotesID
                  userID
                  downVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      DownVotes {
        id
        handle
        Users {
          items {
            id
            downVotesID
            userID
            downVotes {
              id
              handle
              Users {
                items {
                  id
                  downVotesID
                  userID
                  downVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            user {
              id
              name
              upvotess {
                items {
                  id
                  upVotesID
                  userID
                  upVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              downvotess {
                items {
                  id
                  downVotesID
                  userID
                  downVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      ReplyThread {
        id
        Thread {
          id
          Posts {
            items {
              id
              threadID
              content
              User {
                id
                name
                upvotess {
                  items {
                    id
                    upVotesID
                    userID
                    upVotes {
                      id
                      handle
                      Users {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    user {
                      id
                      name
                      upvotess {
                        nextToken
                        startedAt
                      }
                      downvotess {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  nextToken
                  startedAt
                }
                downvotess {
                  items {
                    id
                    downVotesID
                    userID
                    downVotes {
                      id
                      handle
                      Users {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    user {
                      id
                      name
                      upvotess {
                        nextToken
                        startedAt
                      }
                      downvotess {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              UpVotes {
                id
                handle
                Users {
                  items {
                    id
                    upVotesID
                    userID
                    upVotes {
                      id
                      handle
                      Users {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    user {
                      id
                      name
                      upvotess {
                        nextToken
                        startedAt
                      }
                      downvotess {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              DownVotes {
                id
                handle
                Users {
                  items {
                    id
                    downVotesID
                    userID
                    downVotes {
                      id
                      handle
                      Users {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    user {
                      id
                      name
                      upvotess {
                        nextToken
                        startedAt
                      }
                      downvotess {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              ReplyThread {
                id
                Thread {
                  id
                  Posts {
                    items {
                      id
                      threadID
                      content
                      User {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      UpVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      DownVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      ReplyThread {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        replyThreadThreadId
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      postUserId
                      postUpVotesId
                      postDownVotesId
                      postReplyThreadId
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                handle
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                replyThreadThreadId
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              postUserId
              postUpVotesId
              postDownVotesId
              postReplyThreadId
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        handle
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        replyThreadThreadId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      postUserId
      postUpVotesId
      postDownVotesId
      postReplyThreadId
    }
  }
`;
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
      id
      threadID
      content
      User {
        id
        name
        upvotess {
          items {
            id
            upVotesID
            userID
            upVotes {
              id
              handle
              Users {
                items {
                  id
                  upVotesID
                  userID
                  upVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            user {
              id
              name
              upvotess {
                items {
                  id
                  upVotesID
                  userID
                  upVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              downvotess {
                items {
                  id
                  downVotesID
                  userID
                  downVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        downvotess {
          items {
            id
            downVotesID
            userID
            downVotes {
              id
              handle
              Users {
                items {
                  id
                  downVotesID
                  userID
                  downVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            user {
              id
              name
              upvotess {
                items {
                  id
                  upVotesID
                  userID
                  upVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              downvotess {
                items {
                  id
                  downVotesID
                  userID
                  downVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      UpVotes {
        id
        handle
        Users {
          items {
            id
            upVotesID
            userID
            upVotes {
              id
              handle
              Users {
                items {
                  id
                  upVotesID
                  userID
                  upVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            user {
              id
              name
              upvotess {
                items {
                  id
                  upVotesID
                  userID
                  upVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              downvotess {
                items {
                  id
                  downVotesID
                  userID
                  downVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      DownVotes {
        id
        handle
        Users {
          items {
            id
            downVotesID
            userID
            downVotes {
              id
              handle
              Users {
                items {
                  id
                  downVotesID
                  userID
                  downVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            user {
              id
              name
              upvotess {
                items {
                  id
                  upVotesID
                  userID
                  upVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              downvotess {
                items {
                  id
                  downVotesID
                  userID
                  downVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      ReplyThread {
        id
        Thread {
          id
          Posts {
            items {
              id
              threadID
              content
              User {
                id
                name
                upvotess {
                  items {
                    id
                    upVotesID
                    userID
                    upVotes {
                      id
                      handle
                      Users {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    user {
                      id
                      name
                      upvotess {
                        nextToken
                        startedAt
                      }
                      downvotess {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  nextToken
                  startedAt
                }
                downvotess {
                  items {
                    id
                    downVotesID
                    userID
                    downVotes {
                      id
                      handle
                      Users {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    user {
                      id
                      name
                      upvotess {
                        nextToken
                        startedAt
                      }
                      downvotess {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              UpVotes {
                id
                handle
                Users {
                  items {
                    id
                    upVotesID
                    userID
                    upVotes {
                      id
                      handle
                      Users {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    user {
                      id
                      name
                      upvotess {
                        nextToken
                        startedAt
                      }
                      downvotess {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              DownVotes {
                id
                handle
                Users {
                  items {
                    id
                    downVotesID
                    userID
                    downVotes {
                      id
                      handle
                      Users {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    user {
                      id
                      name
                      upvotess {
                        nextToken
                        startedAt
                      }
                      downvotess {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              ReplyThread {
                id
                Thread {
                  id
                  Posts {
                    items {
                      id
                      threadID
                      content
                      User {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      UpVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      DownVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      ReplyThread {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        replyThreadThreadId
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      postUserId
                      postUpVotesId
                      postDownVotesId
                      postReplyThreadId
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                handle
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                replyThreadThreadId
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              postUserId
              postUpVotesId
              postDownVotesId
              postReplyThreadId
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        handle
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        replyThreadThreadId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      postUserId
      postUpVotesId
      postDownVotesId
      postReplyThreadId
    }
  }
`;
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
      id
      threadID
      content
      User {
        id
        name
        upvotess {
          items {
            id
            upVotesID
            userID
            upVotes {
              id
              handle
              Users {
                items {
                  id
                  upVotesID
                  userID
                  upVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            user {
              id
              name
              upvotess {
                items {
                  id
                  upVotesID
                  userID
                  upVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              downvotess {
                items {
                  id
                  downVotesID
                  userID
                  downVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        downvotess {
          items {
            id
            downVotesID
            userID
            downVotes {
              id
              handle
              Users {
                items {
                  id
                  downVotesID
                  userID
                  downVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            user {
              id
              name
              upvotess {
                items {
                  id
                  upVotesID
                  userID
                  upVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              downvotess {
                items {
                  id
                  downVotesID
                  userID
                  downVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      UpVotes {
        id
        handle
        Users {
          items {
            id
            upVotesID
            userID
            upVotes {
              id
              handle
              Users {
                items {
                  id
                  upVotesID
                  userID
                  upVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            user {
              id
              name
              upvotess {
                items {
                  id
                  upVotesID
                  userID
                  upVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              downvotess {
                items {
                  id
                  downVotesID
                  userID
                  downVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      DownVotes {
        id
        handle
        Users {
          items {
            id
            downVotesID
            userID
            downVotes {
              id
              handle
              Users {
                items {
                  id
                  downVotesID
                  userID
                  downVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            user {
              id
              name
              upvotess {
                items {
                  id
                  upVotesID
                  userID
                  upVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              downvotess {
                items {
                  id
                  downVotesID
                  userID
                  downVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      ReplyThread {
        id
        Thread {
          id
          Posts {
            items {
              id
              threadID
              content
              User {
                id
                name
                upvotess {
                  items {
                    id
                    upVotesID
                    userID
                    upVotes {
                      id
                      handle
                      Users {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    user {
                      id
                      name
                      upvotess {
                        nextToken
                        startedAt
                      }
                      downvotess {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  nextToken
                  startedAt
                }
                downvotess {
                  items {
                    id
                    downVotesID
                    userID
                    downVotes {
                      id
                      handle
                      Users {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    user {
                      id
                      name
                      upvotess {
                        nextToken
                        startedAt
                      }
                      downvotess {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              UpVotes {
                id
                handle
                Users {
                  items {
                    id
                    upVotesID
                    userID
                    upVotes {
                      id
                      handle
                      Users {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    user {
                      id
                      name
                      upvotess {
                        nextToken
                        startedAt
                      }
                      downvotess {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              DownVotes {
                id
                handle
                Users {
                  items {
                    id
                    downVotesID
                    userID
                    downVotes {
                      id
                      handle
                      Users {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    user {
                      id
                      name
                      upvotess {
                        nextToken
                        startedAt
                      }
                      downvotess {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              ReplyThread {
                id
                Thread {
                  id
                  Posts {
                    items {
                      id
                      threadID
                      content
                      User {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      UpVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      DownVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      ReplyThread {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        replyThreadThreadId
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      postUserId
                      postUpVotesId
                      postDownVotesId
                      postReplyThreadId
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                handle
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                replyThreadThreadId
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              postUserId
              postUpVotesId
              postDownVotesId
              postReplyThreadId
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        handle
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        replyThreadThreadId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      postUserId
      postUpVotesId
      postDownVotesId
      postReplyThreadId
    }
  }
`;
export const createReplyThread = /* GraphQL */ `
  mutation CreateReplyThread(
    $input: CreateReplyThreadInput!
    $condition: ModelReplyThreadConditionInput
  ) {
    createReplyThread(input: $input, condition: $condition) {
      id
      Thread {
        id
        Posts {
          items {
            id
            threadID
            content
            User {
              id
              name
              upvotess {
                items {
                  id
                  upVotesID
                  userID
                  upVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              downvotess {
                items {
                  id
                  downVotesID
                  userID
                  downVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            UpVotes {
              id
              handle
              Users {
                items {
                  id
                  upVotesID
                  userID
                  upVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            DownVotes {
              id
              handle
              Users {
                items {
                  id
                  downVotesID
                  userID
                  downVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            ReplyThread {
              id
              Thread {
                id
                Posts {
                  items {
                    id
                    threadID
                    content
                    User {
                      id
                      name
                      upvotess {
                        nextToken
                        startedAt
                      }
                      downvotess {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    UpVotes {
                      id
                      handle
                      Users {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    DownVotes {
                      id
                      handle
                      Users {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    ReplyThread {
                      id
                      Thread {
                        id
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      handle
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      replyThreadThreadId
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    postUserId
                    postUpVotesId
                    postDownVotesId
                    postReplyThreadId
                  }
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              handle
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              replyThreadThreadId
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            postUserId
            postUpVotesId
            postDownVotesId
            postReplyThreadId
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      handle
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      replyThreadThreadId
    }
  }
`;
export const updateReplyThread = /* GraphQL */ `
  mutation UpdateReplyThread(
    $input: UpdateReplyThreadInput!
    $condition: ModelReplyThreadConditionInput
  ) {
    updateReplyThread(input: $input, condition: $condition) {
      id
      Thread {
        id
        Posts {
          items {
            id
            threadID
            content
            User {
              id
              name
              upvotess {
                items {
                  id
                  upVotesID
                  userID
                  upVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              downvotess {
                items {
                  id
                  downVotesID
                  userID
                  downVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            UpVotes {
              id
              handle
              Users {
                items {
                  id
                  upVotesID
                  userID
                  upVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            DownVotes {
              id
              handle
              Users {
                items {
                  id
                  downVotesID
                  userID
                  downVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            ReplyThread {
              id
              Thread {
                id
                Posts {
                  items {
                    id
                    threadID
                    content
                    User {
                      id
                      name
                      upvotess {
                        nextToken
                        startedAt
                      }
                      downvotess {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    UpVotes {
                      id
                      handle
                      Users {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    DownVotes {
                      id
                      handle
                      Users {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    ReplyThread {
                      id
                      Thread {
                        id
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      handle
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      replyThreadThreadId
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    postUserId
                    postUpVotesId
                    postDownVotesId
                    postReplyThreadId
                  }
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              handle
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              replyThreadThreadId
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            postUserId
            postUpVotesId
            postDownVotesId
            postReplyThreadId
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      handle
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      replyThreadThreadId
    }
  }
`;
export const deleteReplyThread = /* GraphQL */ `
  mutation DeleteReplyThread(
    $input: DeleteReplyThreadInput!
    $condition: ModelReplyThreadConditionInput
  ) {
    deleteReplyThread(input: $input, condition: $condition) {
      id
      Thread {
        id
        Posts {
          items {
            id
            threadID
            content
            User {
              id
              name
              upvotess {
                items {
                  id
                  upVotesID
                  userID
                  upVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              downvotess {
                items {
                  id
                  downVotesID
                  userID
                  downVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            UpVotes {
              id
              handle
              Users {
                items {
                  id
                  upVotesID
                  userID
                  upVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            DownVotes {
              id
              handle
              Users {
                items {
                  id
                  downVotesID
                  userID
                  downVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            ReplyThread {
              id
              Thread {
                id
                Posts {
                  items {
                    id
                    threadID
                    content
                    User {
                      id
                      name
                      upvotess {
                        nextToken
                        startedAt
                      }
                      downvotess {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    UpVotes {
                      id
                      handle
                      Users {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    DownVotes {
                      id
                      handle
                      Users {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    ReplyThread {
                      id
                      Thread {
                        id
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      handle
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      replyThreadThreadId
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    postUserId
                    postUpVotesId
                    postDownVotesId
                    postReplyThreadId
                  }
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              handle
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              replyThreadThreadId
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            postUserId
            postUpVotesId
            postDownVotesId
            postReplyThreadId
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      handle
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      replyThreadThreadId
    }
  }
`;
export const createDownVotes = /* GraphQL */ `
  mutation CreateDownVotes(
    $input: CreateDownVotesInput!
    $condition: ModelDownVotesConditionInput
  ) {
    createDownVotes(input: $input, condition: $condition) {
      id
      handle
      Users {
        items {
          id
          downVotesID
          userID
          downVotes {
            id
            handle
            Users {
              items {
                id
                downVotesID
                userID
                downVotes {
                  id
                  handle
                  Users {
                    items {
                      id
                      downVotesID
                      userID
                      downVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                user {
                  id
                  name
                  upvotess {
                    items {
                      id
                      upVotesID
                      userID
                      upVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  downvotess {
                    items {
                      id
                      downVotesID
                      userID
                      downVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          user {
            id
            name
            upvotess {
              items {
                id
                upVotesID
                userID
                upVotes {
                  id
                  handle
                  Users {
                    items {
                      id
                      upVotesID
                      userID
                      upVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                user {
                  id
                  name
                  upvotess {
                    items {
                      id
                      upVotesID
                      userID
                      upVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  downvotess {
                    items {
                      id
                      downVotesID
                      userID
                      downVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            downvotess {
              items {
                id
                downVotesID
                userID
                downVotes {
                  id
                  handle
                  Users {
                    items {
                      id
                      downVotesID
                      userID
                      downVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                user {
                  id
                  name
                  upvotess {
                    items {
                      id
                      upVotesID
                      userID
                      upVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  downvotess {
                    items {
                      id
                      downVotesID
                      userID
                      downVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateDownVotes = /* GraphQL */ `
  mutation UpdateDownVotes(
    $input: UpdateDownVotesInput!
    $condition: ModelDownVotesConditionInput
  ) {
    updateDownVotes(input: $input, condition: $condition) {
      id
      handle
      Users {
        items {
          id
          downVotesID
          userID
          downVotes {
            id
            handle
            Users {
              items {
                id
                downVotesID
                userID
                downVotes {
                  id
                  handle
                  Users {
                    items {
                      id
                      downVotesID
                      userID
                      downVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                user {
                  id
                  name
                  upvotess {
                    items {
                      id
                      upVotesID
                      userID
                      upVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  downvotess {
                    items {
                      id
                      downVotesID
                      userID
                      downVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          user {
            id
            name
            upvotess {
              items {
                id
                upVotesID
                userID
                upVotes {
                  id
                  handle
                  Users {
                    items {
                      id
                      upVotesID
                      userID
                      upVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                user {
                  id
                  name
                  upvotess {
                    items {
                      id
                      upVotesID
                      userID
                      upVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  downvotess {
                    items {
                      id
                      downVotesID
                      userID
                      downVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            downvotess {
              items {
                id
                downVotesID
                userID
                downVotes {
                  id
                  handle
                  Users {
                    items {
                      id
                      downVotesID
                      userID
                      downVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                user {
                  id
                  name
                  upvotess {
                    items {
                      id
                      upVotesID
                      userID
                      upVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  downvotess {
                    items {
                      id
                      downVotesID
                      userID
                      downVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteDownVotes = /* GraphQL */ `
  mutation DeleteDownVotes(
    $input: DeleteDownVotesInput!
    $condition: ModelDownVotesConditionInput
  ) {
    deleteDownVotes(input: $input, condition: $condition) {
      id
      handle
      Users {
        items {
          id
          downVotesID
          userID
          downVotes {
            id
            handle
            Users {
              items {
                id
                downVotesID
                userID
                downVotes {
                  id
                  handle
                  Users {
                    items {
                      id
                      downVotesID
                      userID
                      downVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                user {
                  id
                  name
                  upvotess {
                    items {
                      id
                      upVotesID
                      userID
                      upVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  downvotess {
                    items {
                      id
                      downVotesID
                      userID
                      downVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          user {
            id
            name
            upvotess {
              items {
                id
                upVotesID
                userID
                upVotes {
                  id
                  handle
                  Users {
                    items {
                      id
                      upVotesID
                      userID
                      upVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                user {
                  id
                  name
                  upvotess {
                    items {
                      id
                      upVotesID
                      userID
                      upVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  downvotess {
                    items {
                      id
                      downVotesID
                      userID
                      downVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            downvotess {
              items {
                id
                downVotesID
                userID
                downVotes {
                  id
                  handle
                  Users {
                    items {
                      id
                      downVotesID
                      userID
                      downVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                user {
                  id
                  name
                  upvotess {
                    items {
                      id
                      upVotesID
                      userID
                      upVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  downvotess {
                    items {
                      id
                      downVotesID
                      userID
                      downVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createUpVotes = /* GraphQL */ `
  mutation CreateUpVotes(
    $input: CreateUpVotesInput!
    $condition: ModelUpVotesConditionInput
  ) {
    createUpVotes(input: $input, condition: $condition) {
      id
      handle
      Users {
        items {
          id
          upVotesID
          userID
          upVotes {
            id
            handle
            Users {
              items {
                id
                upVotesID
                userID
                upVotes {
                  id
                  handle
                  Users {
                    items {
                      id
                      upVotesID
                      userID
                      upVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                user {
                  id
                  name
                  upvotess {
                    items {
                      id
                      upVotesID
                      userID
                      upVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  downvotess {
                    items {
                      id
                      downVotesID
                      userID
                      downVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          user {
            id
            name
            upvotess {
              items {
                id
                upVotesID
                userID
                upVotes {
                  id
                  handle
                  Users {
                    items {
                      id
                      upVotesID
                      userID
                      upVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                user {
                  id
                  name
                  upvotess {
                    items {
                      id
                      upVotesID
                      userID
                      upVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  downvotess {
                    items {
                      id
                      downVotesID
                      userID
                      downVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            downvotess {
              items {
                id
                downVotesID
                userID
                downVotes {
                  id
                  handle
                  Users {
                    items {
                      id
                      downVotesID
                      userID
                      downVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                user {
                  id
                  name
                  upvotess {
                    items {
                      id
                      upVotesID
                      userID
                      upVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  downvotess {
                    items {
                      id
                      downVotesID
                      userID
                      downVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateUpVotes = /* GraphQL */ `
  mutation UpdateUpVotes(
    $input: UpdateUpVotesInput!
    $condition: ModelUpVotesConditionInput
  ) {
    updateUpVotes(input: $input, condition: $condition) {
      id
      handle
      Users {
        items {
          id
          upVotesID
          userID
          upVotes {
            id
            handle
            Users {
              items {
                id
                upVotesID
                userID
                upVotes {
                  id
                  handle
                  Users {
                    items {
                      id
                      upVotesID
                      userID
                      upVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                user {
                  id
                  name
                  upvotess {
                    items {
                      id
                      upVotesID
                      userID
                      upVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  downvotess {
                    items {
                      id
                      downVotesID
                      userID
                      downVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          user {
            id
            name
            upvotess {
              items {
                id
                upVotesID
                userID
                upVotes {
                  id
                  handle
                  Users {
                    items {
                      id
                      upVotesID
                      userID
                      upVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                user {
                  id
                  name
                  upvotess {
                    items {
                      id
                      upVotesID
                      userID
                      upVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  downvotess {
                    items {
                      id
                      downVotesID
                      userID
                      downVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            downvotess {
              items {
                id
                downVotesID
                userID
                downVotes {
                  id
                  handle
                  Users {
                    items {
                      id
                      downVotesID
                      userID
                      downVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                user {
                  id
                  name
                  upvotess {
                    items {
                      id
                      upVotesID
                      userID
                      upVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  downvotess {
                    items {
                      id
                      downVotesID
                      userID
                      downVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteUpVotes = /* GraphQL */ `
  mutation DeleteUpVotes(
    $input: DeleteUpVotesInput!
    $condition: ModelUpVotesConditionInput
  ) {
    deleteUpVotes(input: $input, condition: $condition) {
      id
      handle
      Users {
        items {
          id
          upVotesID
          userID
          upVotes {
            id
            handle
            Users {
              items {
                id
                upVotesID
                userID
                upVotes {
                  id
                  handle
                  Users {
                    items {
                      id
                      upVotesID
                      userID
                      upVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                user {
                  id
                  name
                  upvotess {
                    items {
                      id
                      upVotesID
                      userID
                      upVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  downvotess {
                    items {
                      id
                      downVotesID
                      userID
                      downVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          user {
            id
            name
            upvotess {
              items {
                id
                upVotesID
                userID
                upVotes {
                  id
                  handle
                  Users {
                    items {
                      id
                      upVotesID
                      userID
                      upVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                user {
                  id
                  name
                  upvotess {
                    items {
                      id
                      upVotesID
                      userID
                      upVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  downvotess {
                    items {
                      id
                      downVotesID
                      userID
                      downVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            downvotess {
              items {
                id
                downVotesID
                userID
                downVotes {
                  id
                  handle
                  Users {
                    items {
                      id
                      downVotesID
                      userID
                      downVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                user {
                  id
                  name
                  upvotess {
                    items {
                      id
                      upVotesID
                      userID
                      upVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  downvotess {
                    items {
                      id
                      downVotesID
                      userID
                      downVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      upvotess {
        items {
          id
          upVotesID
          userID
          upVotes {
            id
            handle
            Users {
              items {
                id
                upVotesID
                userID
                upVotes {
                  id
                  handle
                  Users {
                    items {
                      id
                      upVotesID
                      userID
                      upVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                user {
                  id
                  name
                  upvotess {
                    items {
                      id
                      upVotesID
                      userID
                      upVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  downvotess {
                    items {
                      id
                      downVotesID
                      userID
                      downVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          user {
            id
            name
            upvotess {
              items {
                id
                upVotesID
                userID
                upVotes {
                  id
                  handle
                  Users {
                    items {
                      id
                      upVotesID
                      userID
                      upVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                user {
                  id
                  name
                  upvotess {
                    items {
                      id
                      upVotesID
                      userID
                      upVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  downvotess {
                    items {
                      id
                      downVotesID
                      userID
                      downVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            downvotess {
              items {
                id
                downVotesID
                userID
                downVotes {
                  id
                  handle
                  Users {
                    items {
                      id
                      downVotesID
                      userID
                      downVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                user {
                  id
                  name
                  upvotess {
                    items {
                      id
                      upVotesID
                      userID
                      upVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  downvotess {
                    items {
                      id
                      downVotesID
                      userID
                      downVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      downvotess {
        items {
          id
          downVotesID
          userID
          downVotes {
            id
            handle
            Users {
              items {
                id
                downVotesID
                userID
                downVotes {
                  id
                  handle
                  Users {
                    items {
                      id
                      downVotesID
                      userID
                      downVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                user {
                  id
                  name
                  upvotess {
                    items {
                      id
                      upVotesID
                      userID
                      upVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  downvotess {
                    items {
                      id
                      downVotesID
                      userID
                      downVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          user {
            id
            name
            upvotess {
              items {
                id
                upVotesID
                userID
                upVotes {
                  id
                  handle
                  Users {
                    items {
                      id
                      upVotesID
                      userID
                      upVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                user {
                  id
                  name
                  upvotess {
                    items {
                      id
                      upVotesID
                      userID
                      upVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  downvotess {
                    items {
                      id
                      downVotesID
                      userID
                      downVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            downvotess {
              items {
                id
                downVotesID
                userID
                downVotes {
                  id
                  handle
                  Users {
                    items {
                      id
                      downVotesID
                      userID
                      downVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                user {
                  id
                  name
                  upvotess {
                    items {
                      id
                      upVotesID
                      userID
                      upVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  downvotess {
                    items {
                      id
                      downVotesID
                      userID
                      downVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      upvotess {
        items {
          id
          upVotesID
          userID
          upVotes {
            id
            handle
            Users {
              items {
                id
                upVotesID
                userID
                upVotes {
                  id
                  handle
                  Users {
                    items {
                      id
                      upVotesID
                      userID
                      upVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                user {
                  id
                  name
                  upvotess {
                    items {
                      id
                      upVotesID
                      userID
                      upVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  downvotess {
                    items {
                      id
                      downVotesID
                      userID
                      downVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          user {
            id
            name
            upvotess {
              items {
                id
                upVotesID
                userID
                upVotes {
                  id
                  handle
                  Users {
                    items {
                      id
                      upVotesID
                      userID
                      upVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                user {
                  id
                  name
                  upvotess {
                    items {
                      id
                      upVotesID
                      userID
                      upVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  downvotess {
                    items {
                      id
                      downVotesID
                      userID
                      downVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            downvotess {
              items {
                id
                downVotesID
                userID
                downVotes {
                  id
                  handle
                  Users {
                    items {
                      id
                      downVotesID
                      userID
                      downVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                user {
                  id
                  name
                  upvotess {
                    items {
                      id
                      upVotesID
                      userID
                      upVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  downvotess {
                    items {
                      id
                      downVotesID
                      userID
                      downVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      downvotess {
        items {
          id
          downVotesID
          userID
          downVotes {
            id
            handle
            Users {
              items {
                id
                downVotesID
                userID
                downVotes {
                  id
                  handle
                  Users {
                    items {
                      id
                      downVotesID
                      userID
                      downVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                user {
                  id
                  name
                  upvotess {
                    items {
                      id
                      upVotesID
                      userID
                      upVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  downvotess {
                    items {
                      id
                      downVotesID
                      userID
                      downVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          user {
            id
            name
            upvotess {
              items {
                id
                upVotesID
                userID
                upVotes {
                  id
                  handle
                  Users {
                    items {
                      id
                      upVotesID
                      userID
                      upVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                user {
                  id
                  name
                  upvotess {
                    items {
                      id
                      upVotesID
                      userID
                      upVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  downvotess {
                    items {
                      id
                      downVotesID
                      userID
                      downVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            downvotess {
              items {
                id
                downVotesID
                userID
                downVotes {
                  id
                  handle
                  Users {
                    items {
                      id
                      downVotesID
                      userID
                      downVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                user {
                  id
                  name
                  upvotess {
                    items {
                      id
                      upVotesID
                      userID
                      upVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  downvotess {
                    items {
                      id
                      downVotesID
                      userID
                      downVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      upvotess {
        items {
          id
          upVotesID
          userID
          upVotes {
            id
            handle
            Users {
              items {
                id
                upVotesID
                userID
                upVotes {
                  id
                  handle
                  Users {
                    items {
                      id
                      upVotesID
                      userID
                      upVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                user {
                  id
                  name
                  upvotess {
                    items {
                      id
                      upVotesID
                      userID
                      upVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  downvotess {
                    items {
                      id
                      downVotesID
                      userID
                      downVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          user {
            id
            name
            upvotess {
              items {
                id
                upVotesID
                userID
                upVotes {
                  id
                  handle
                  Users {
                    items {
                      id
                      upVotesID
                      userID
                      upVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                user {
                  id
                  name
                  upvotess {
                    items {
                      id
                      upVotesID
                      userID
                      upVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  downvotess {
                    items {
                      id
                      downVotesID
                      userID
                      downVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            downvotess {
              items {
                id
                downVotesID
                userID
                downVotes {
                  id
                  handle
                  Users {
                    items {
                      id
                      downVotesID
                      userID
                      downVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                user {
                  id
                  name
                  upvotess {
                    items {
                      id
                      upVotesID
                      userID
                      upVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  downvotess {
                    items {
                      id
                      downVotesID
                      userID
                      downVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      downvotess {
        items {
          id
          downVotesID
          userID
          downVotes {
            id
            handle
            Users {
              items {
                id
                downVotesID
                userID
                downVotes {
                  id
                  handle
                  Users {
                    items {
                      id
                      downVotesID
                      userID
                      downVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                user {
                  id
                  name
                  upvotess {
                    items {
                      id
                      upVotesID
                      userID
                      upVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  downvotess {
                    items {
                      id
                      downVotesID
                      userID
                      downVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          user {
            id
            name
            upvotess {
              items {
                id
                upVotesID
                userID
                upVotes {
                  id
                  handle
                  Users {
                    items {
                      id
                      upVotesID
                      userID
                      upVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                user {
                  id
                  name
                  upvotess {
                    items {
                      id
                      upVotesID
                      userID
                      upVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  downvotess {
                    items {
                      id
                      downVotesID
                      userID
                      downVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            downvotess {
              items {
                id
                downVotesID
                userID
                downVotes {
                  id
                  handle
                  Users {
                    items {
                      id
                      downVotesID
                      userID
                      downVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                user {
                  id
                  name
                  upvotess {
                    items {
                      id
                      upVotesID
                      userID
                      upVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  downvotess {
                    items {
                      id
                      downVotesID
                      userID
                      downVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createThread = /* GraphQL */ `
  mutation CreateThread(
    $input: CreateThreadInput!
    $condition: ModelThreadConditionInput
  ) {
    createThread(input: $input, condition: $condition) {
      id
      Posts {
        items {
          id
          threadID
          content
          User {
            id
            name
            upvotess {
              items {
                id
                upVotesID
                userID
                upVotes {
                  id
                  handle
                  Users {
                    items {
                      id
                      upVotesID
                      userID
                      upVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                user {
                  id
                  name
                  upvotess {
                    items {
                      id
                      upVotesID
                      userID
                      upVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  downvotess {
                    items {
                      id
                      downVotesID
                      userID
                      downVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            downvotess {
              items {
                id
                downVotesID
                userID
                downVotes {
                  id
                  handle
                  Users {
                    items {
                      id
                      downVotesID
                      userID
                      downVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                user {
                  id
                  name
                  upvotess {
                    items {
                      id
                      upVotesID
                      userID
                      upVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  downvotess {
                    items {
                      id
                      downVotesID
                      userID
                      downVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          UpVotes {
            id
            handle
            Users {
              items {
                id
                upVotesID
                userID
                upVotes {
                  id
                  handle
                  Users {
                    items {
                      id
                      upVotesID
                      userID
                      upVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                user {
                  id
                  name
                  upvotess {
                    items {
                      id
                      upVotesID
                      userID
                      upVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  downvotess {
                    items {
                      id
                      downVotesID
                      userID
                      downVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          DownVotes {
            id
            handle
            Users {
              items {
                id
                downVotesID
                userID
                downVotes {
                  id
                  handle
                  Users {
                    items {
                      id
                      downVotesID
                      userID
                      downVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                user {
                  id
                  name
                  upvotess {
                    items {
                      id
                      upVotesID
                      userID
                      upVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  downvotess {
                    items {
                      id
                      downVotesID
                      userID
                      downVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          ReplyThread {
            id
            Thread {
              id
              Posts {
                items {
                  id
                  threadID
                  content
                  User {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  UpVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  DownVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  ReplyThread {
                    id
                    Thread {
                      id
                      Posts {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    handle
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    replyThreadThreadId
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  postUserId
                  postUpVotesId
                  postDownVotesId
                  postReplyThreadId
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            handle
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            replyThreadThreadId
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          postUserId
          postUpVotesId
          postDownVotesId
          postReplyThreadId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateThread = /* GraphQL */ `
  mutation UpdateThread(
    $input: UpdateThreadInput!
    $condition: ModelThreadConditionInput
  ) {
    updateThread(input: $input, condition: $condition) {
      id
      Posts {
        items {
          id
          threadID
          content
          User {
            id
            name
            upvotess {
              items {
                id
                upVotesID
                userID
                upVotes {
                  id
                  handle
                  Users {
                    items {
                      id
                      upVotesID
                      userID
                      upVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                user {
                  id
                  name
                  upvotess {
                    items {
                      id
                      upVotesID
                      userID
                      upVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  downvotess {
                    items {
                      id
                      downVotesID
                      userID
                      downVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            downvotess {
              items {
                id
                downVotesID
                userID
                downVotes {
                  id
                  handle
                  Users {
                    items {
                      id
                      downVotesID
                      userID
                      downVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                user {
                  id
                  name
                  upvotess {
                    items {
                      id
                      upVotesID
                      userID
                      upVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  downvotess {
                    items {
                      id
                      downVotesID
                      userID
                      downVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          UpVotes {
            id
            handle
            Users {
              items {
                id
                upVotesID
                userID
                upVotes {
                  id
                  handle
                  Users {
                    items {
                      id
                      upVotesID
                      userID
                      upVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                user {
                  id
                  name
                  upvotess {
                    items {
                      id
                      upVotesID
                      userID
                      upVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  downvotess {
                    items {
                      id
                      downVotesID
                      userID
                      downVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          DownVotes {
            id
            handle
            Users {
              items {
                id
                downVotesID
                userID
                downVotes {
                  id
                  handle
                  Users {
                    items {
                      id
                      downVotesID
                      userID
                      downVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                user {
                  id
                  name
                  upvotess {
                    items {
                      id
                      upVotesID
                      userID
                      upVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  downvotess {
                    items {
                      id
                      downVotesID
                      userID
                      downVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          ReplyThread {
            id
            Thread {
              id
              Posts {
                items {
                  id
                  threadID
                  content
                  User {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  UpVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  DownVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  ReplyThread {
                    id
                    Thread {
                      id
                      Posts {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    handle
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    replyThreadThreadId
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  postUserId
                  postUpVotesId
                  postDownVotesId
                  postReplyThreadId
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            handle
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            replyThreadThreadId
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          postUserId
          postUpVotesId
          postDownVotesId
          postReplyThreadId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteThread = /* GraphQL */ `
  mutation DeleteThread(
    $input: DeleteThreadInput!
    $condition: ModelThreadConditionInput
  ) {
    deleteThread(input: $input, condition: $condition) {
      id
      Posts {
        items {
          id
          threadID
          content
          User {
            id
            name
            upvotess {
              items {
                id
                upVotesID
                userID
                upVotes {
                  id
                  handle
                  Users {
                    items {
                      id
                      upVotesID
                      userID
                      upVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                user {
                  id
                  name
                  upvotess {
                    items {
                      id
                      upVotesID
                      userID
                      upVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  downvotess {
                    items {
                      id
                      downVotesID
                      userID
                      downVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            downvotess {
              items {
                id
                downVotesID
                userID
                downVotes {
                  id
                  handle
                  Users {
                    items {
                      id
                      downVotesID
                      userID
                      downVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                user {
                  id
                  name
                  upvotess {
                    items {
                      id
                      upVotesID
                      userID
                      upVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  downvotess {
                    items {
                      id
                      downVotesID
                      userID
                      downVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          UpVotes {
            id
            handle
            Users {
              items {
                id
                upVotesID
                userID
                upVotes {
                  id
                  handle
                  Users {
                    items {
                      id
                      upVotesID
                      userID
                      upVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                user {
                  id
                  name
                  upvotess {
                    items {
                      id
                      upVotesID
                      userID
                      upVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  downvotess {
                    items {
                      id
                      downVotesID
                      userID
                      downVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          DownVotes {
            id
            handle
            Users {
              items {
                id
                downVotesID
                userID
                downVotes {
                  id
                  handle
                  Users {
                    items {
                      id
                      downVotesID
                      userID
                      downVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                user {
                  id
                  name
                  upvotess {
                    items {
                      id
                      upVotesID
                      userID
                      upVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  downvotess {
                    items {
                      id
                      downVotesID
                      userID
                      downVotes {
                        id
                        handle
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      user {
                        id
                        name
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    nextToken
                    startedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          ReplyThread {
            id
            Thread {
              id
              Posts {
                items {
                  id
                  threadID
                  content
                  User {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  UpVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  DownVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  ReplyThread {
                    id
                    Thread {
                      id
                      Posts {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    handle
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    replyThreadThreadId
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  postUserId
                  postUpVotesId
                  postDownVotesId
                  postReplyThreadId
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            handle
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            replyThreadThreadId
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          postUserId
          postUpVotesId
          postDownVotesId
          postReplyThreadId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createDiscussion = /* GraphQL */ `
  mutation CreateDiscussion(
    $input: CreateDiscussionInput!
    $condition: ModelDiscussionConditionInput
  ) {
    createDiscussion(input: $input, condition: $condition) {
      id
      Thread {
        id
        Posts {
          items {
            id
            threadID
            content
            User {
              id
              name
              upvotess {
                items {
                  id
                  upVotesID
                  userID
                  upVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              downvotess {
                items {
                  id
                  downVotesID
                  userID
                  downVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            UpVotes {
              id
              handle
              Users {
                items {
                  id
                  upVotesID
                  userID
                  upVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            DownVotes {
              id
              handle
              Users {
                items {
                  id
                  downVotesID
                  userID
                  downVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            ReplyThread {
              id
              Thread {
                id
                Posts {
                  items {
                    id
                    threadID
                    content
                    User {
                      id
                      name
                      upvotess {
                        nextToken
                        startedAt
                      }
                      downvotess {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    UpVotes {
                      id
                      handle
                      Users {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    DownVotes {
                      id
                      handle
                      Users {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    ReplyThread {
                      id
                      Thread {
                        id
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      handle
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      replyThreadThreadId
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    postUserId
                    postUpVotesId
                    postDownVotesId
                    postReplyThreadId
                  }
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              handle
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              replyThreadThreadId
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            postUserId
            postUpVotesId
            postDownVotesId
            postReplyThreadId
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      content
      title
      slug
      User {
        id
        name
        upvotess {
          items {
            id
            upVotesID
            userID
            upVotes {
              id
              handle
              Users {
                items {
                  id
                  upVotesID
                  userID
                  upVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            user {
              id
              name
              upvotess {
                items {
                  id
                  upVotesID
                  userID
                  upVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              downvotess {
                items {
                  id
                  downVotesID
                  userID
                  downVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        downvotess {
          items {
            id
            downVotesID
            userID
            downVotes {
              id
              handle
              Users {
                items {
                  id
                  downVotesID
                  userID
                  downVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            user {
              id
              name
              upvotess {
                items {
                  id
                  upVotesID
                  userID
                  upVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              downvotess {
                items {
                  id
                  downVotesID
                  userID
                  downVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      discussionThreadId
      discussionUserId
    }
  }
`;
export const updateDiscussion = /* GraphQL */ `
  mutation UpdateDiscussion(
    $input: UpdateDiscussionInput!
    $condition: ModelDiscussionConditionInput
  ) {
    updateDiscussion(input: $input, condition: $condition) {
      id
      Thread {
        id
        Posts {
          items {
            id
            threadID
            content
            User {
              id
              name
              upvotess {
                items {
                  id
                  upVotesID
                  userID
                  upVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              downvotess {
                items {
                  id
                  downVotesID
                  userID
                  downVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            UpVotes {
              id
              handle
              Users {
                items {
                  id
                  upVotesID
                  userID
                  upVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            DownVotes {
              id
              handle
              Users {
                items {
                  id
                  downVotesID
                  userID
                  downVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            ReplyThread {
              id
              Thread {
                id
                Posts {
                  items {
                    id
                    threadID
                    content
                    User {
                      id
                      name
                      upvotess {
                        nextToken
                        startedAt
                      }
                      downvotess {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    UpVotes {
                      id
                      handle
                      Users {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    DownVotes {
                      id
                      handle
                      Users {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    ReplyThread {
                      id
                      Thread {
                        id
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      handle
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      replyThreadThreadId
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    postUserId
                    postUpVotesId
                    postDownVotesId
                    postReplyThreadId
                  }
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              handle
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              replyThreadThreadId
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            postUserId
            postUpVotesId
            postDownVotesId
            postReplyThreadId
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      content
      title
      slug
      User {
        id
        name
        upvotess {
          items {
            id
            upVotesID
            userID
            upVotes {
              id
              handle
              Users {
                items {
                  id
                  upVotesID
                  userID
                  upVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            user {
              id
              name
              upvotess {
                items {
                  id
                  upVotesID
                  userID
                  upVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              downvotess {
                items {
                  id
                  downVotesID
                  userID
                  downVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        downvotess {
          items {
            id
            downVotesID
            userID
            downVotes {
              id
              handle
              Users {
                items {
                  id
                  downVotesID
                  userID
                  downVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            user {
              id
              name
              upvotess {
                items {
                  id
                  upVotesID
                  userID
                  upVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              downvotess {
                items {
                  id
                  downVotesID
                  userID
                  downVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      discussionThreadId
      discussionUserId
    }
  }
`;
export const deleteDiscussion = /* GraphQL */ `
  mutation DeleteDiscussion(
    $input: DeleteDiscussionInput!
    $condition: ModelDiscussionConditionInput
  ) {
    deleteDiscussion(input: $input, condition: $condition) {
      id
      Thread {
        id
        Posts {
          items {
            id
            threadID
            content
            User {
              id
              name
              upvotess {
                items {
                  id
                  upVotesID
                  userID
                  upVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              downvotess {
                items {
                  id
                  downVotesID
                  userID
                  downVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            UpVotes {
              id
              handle
              Users {
                items {
                  id
                  upVotesID
                  userID
                  upVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            DownVotes {
              id
              handle
              Users {
                items {
                  id
                  downVotesID
                  userID
                  downVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            ReplyThread {
              id
              Thread {
                id
                Posts {
                  items {
                    id
                    threadID
                    content
                    User {
                      id
                      name
                      upvotess {
                        nextToken
                        startedAt
                      }
                      downvotess {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    UpVotes {
                      id
                      handle
                      Users {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    DownVotes {
                      id
                      handle
                      Users {
                        nextToken
                        startedAt
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    ReplyThread {
                      id
                      Thread {
                        id
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      handle
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      replyThreadThreadId
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    postUserId
                    postUpVotesId
                    postDownVotesId
                    postReplyThreadId
                  }
                  nextToken
                  startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              handle
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              replyThreadThreadId
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            postUserId
            postUpVotesId
            postDownVotesId
            postReplyThreadId
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      content
      title
      slug
      User {
        id
        name
        upvotess {
          items {
            id
            upVotesID
            userID
            upVotes {
              id
              handle
              Users {
                items {
                  id
                  upVotesID
                  userID
                  upVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            user {
              id
              name
              upvotess {
                items {
                  id
                  upVotesID
                  userID
                  upVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              downvotess {
                items {
                  id
                  downVotesID
                  userID
                  downVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        downvotess {
          items {
            id
            downVotesID
            userID
            downVotes {
              id
              handle
              Users {
                items {
                  id
                  downVotesID
                  userID
                  downVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            user {
              id
              name
              upvotess {
                items {
                  id
                  upVotesID
                  userID
                  upVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              downvotess {
                items {
                  id
                  downVotesID
                  userID
                  downVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      discussionThreadId
      discussionUserId
    }
  }
`;
export const createDownVotesUser = /* GraphQL */ `
  mutation CreateDownVotesUser(
    $input: CreateDownVotesUserInput!
    $condition: ModelDownVotesUserConditionInput
  ) {
    createDownVotesUser(input: $input, condition: $condition) {
      id
      downVotesID
      userID
      downVotes {
        id
        handle
        Users {
          items {
            id
            downVotesID
            userID
            downVotes {
              id
              handle
              Users {
                items {
                  id
                  downVotesID
                  userID
                  downVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            user {
              id
              name
              upvotess {
                items {
                  id
                  upVotesID
                  userID
                  upVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              downvotess {
                items {
                  id
                  downVotesID
                  userID
                  downVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      user {
        id
        name
        upvotess {
          items {
            id
            upVotesID
            userID
            upVotes {
              id
              handle
              Users {
                items {
                  id
                  upVotesID
                  userID
                  upVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            user {
              id
              name
              upvotess {
                items {
                  id
                  upVotesID
                  userID
                  upVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              downvotess {
                items {
                  id
                  downVotesID
                  userID
                  downVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        downvotess {
          items {
            id
            downVotesID
            userID
            downVotes {
              id
              handle
              Users {
                items {
                  id
                  downVotesID
                  userID
                  downVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            user {
              id
              name
              upvotess {
                items {
                  id
                  upVotesID
                  userID
                  upVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              downvotess {
                items {
                  id
                  downVotesID
                  userID
                  downVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateDownVotesUser = /* GraphQL */ `
  mutation UpdateDownVotesUser(
    $input: UpdateDownVotesUserInput!
    $condition: ModelDownVotesUserConditionInput
  ) {
    updateDownVotesUser(input: $input, condition: $condition) {
      id
      downVotesID
      userID
      downVotes {
        id
        handle
        Users {
          items {
            id
            downVotesID
            userID
            downVotes {
              id
              handle
              Users {
                items {
                  id
                  downVotesID
                  userID
                  downVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            user {
              id
              name
              upvotess {
                items {
                  id
                  upVotesID
                  userID
                  upVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              downvotess {
                items {
                  id
                  downVotesID
                  userID
                  downVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      user {
        id
        name
        upvotess {
          items {
            id
            upVotesID
            userID
            upVotes {
              id
              handle
              Users {
                items {
                  id
                  upVotesID
                  userID
                  upVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            user {
              id
              name
              upvotess {
                items {
                  id
                  upVotesID
                  userID
                  upVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              downvotess {
                items {
                  id
                  downVotesID
                  userID
                  downVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        downvotess {
          items {
            id
            downVotesID
            userID
            downVotes {
              id
              handle
              Users {
                items {
                  id
                  downVotesID
                  userID
                  downVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            user {
              id
              name
              upvotess {
                items {
                  id
                  upVotesID
                  userID
                  upVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              downvotess {
                items {
                  id
                  downVotesID
                  userID
                  downVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteDownVotesUser = /* GraphQL */ `
  mutation DeleteDownVotesUser(
    $input: DeleteDownVotesUserInput!
    $condition: ModelDownVotesUserConditionInput
  ) {
    deleteDownVotesUser(input: $input, condition: $condition) {
      id
      downVotesID
      userID
      downVotes {
        id
        handle
        Users {
          items {
            id
            downVotesID
            userID
            downVotes {
              id
              handle
              Users {
                items {
                  id
                  downVotesID
                  userID
                  downVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            user {
              id
              name
              upvotess {
                items {
                  id
                  upVotesID
                  userID
                  upVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              downvotess {
                items {
                  id
                  downVotesID
                  userID
                  downVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      user {
        id
        name
        upvotess {
          items {
            id
            upVotesID
            userID
            upVotes {
              id
              handle
              Users {
                items {
                  id
                  upVotesID
                  userID
                  upVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            user {
              id
              name
              upvotess {
                items {
                  id
                  upVotesID
                  userID
                  upVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              downvotess {
                items {
                  id
                  downVotesID
                  userID
                  downVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        downvotess {
          items {
            id
            downVotesID
            userID
            downVotes {
              id
              handle
              Users {
                items {
                  id
                  downVotesID
                  userID
                  downVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            user {
              id
              name
              upvotess {
                items {
                  id
                  upVotesID
                  userID
                  upVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              downvotess {
                items {
                  id
                  downVotesID
                  userID
                  downVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createUserUpVotes = /* GraphQL */ `
  mutation CreateUserUpVotes(
    $input: CreateUserUpVotesInput!
    $condition: ModelUserUpVotesConditionInput
  ) {
    createUserUpVotes(input: $input, condition: $condition) {
      id
      upVotesID
      userID
      upVotes {
        id
        handle
        Users {
          items {
            id
            upVotesID
            userID
            upVotes {
              id
              handle
              Users {
                items {
                  id
                  upVotesID
                  userID
                  upVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            user {
              id
              name
              upvotess {
                items {
                  id
                  upVotesID
                  userID
                  upVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              downvotess {
                items {
                  id
                  downVotesID
                  userID
                  downVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      user {
        id
        name
        upvotess {
          items {
            id
            upVotesID
            userID
            upVotes {
              id
              handle
              Users {
                items {
                  id
                  upVotesID
                  userID
                  upVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            user {
              id
              name
              upvotess {
                items {
                  id
                  upVotesID
                  userID
                  upVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              downvotess {
                items {
                  id
                  downVotesID
                  userID
                  downVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        downvotess {
          items {
            id
            downVotesID
            userID
            downVotes {
              id
              handle
              Users {
                items {
                  id
                  downVotesID
                  userID
                  downVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            user {
              id
              name
              upvotess {
                items {
                  id
                  upVotesID
                  userID
                  upVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              downvotess {
                items {
                  id
                  downVotesID
                  userID
                  downVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateUserUpVotes = /* GraphQL */ `
  mutation UpdateUserUpVotes(
    $input: UpdateUserUpVotesInput!
    $condition: ModelUserUpVotesConditionInput
  ) {
    updateUserUpVotes(input: $input, condition: $condition) {
      id
      upVotesID
      userID
      upVotes {
        id
        handle
        Users {
          items {
            id
            upVotesID
            userID
            upVotes {
              id
              handle
              Users {
                items {
                  id
                  upVotesID
                  userID
                  upVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            user {
              id
              name
              upvotess {
                items {
                  id
                  upVotesID
                  userID
                  upVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              downvotess {
                items {
                  id
                  downVotesID
                  userID
                  downVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      user {
        id
        name
        upvotess {
          items {
            id
            upVotesID
            userID
            upVotes {
              id
              handle
              Users {
                items {
                  id
                  upVotesID
                  userID
                  upVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            user {
              id
              name
              upvotess {
                items {
                  id
                  upVotesID
                  userID
                  upVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              downvotess {
                items {
                  id
                  downVotesID
                  userID
                  downVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        downvotess {
          items {
            id
            downVotesID
            userID
            downVotes {
              id
              handle
              Users {
                items {
                  id
                  downVotesID
                  userID
                  downVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            user {
              id
              name
              upvotess {
                items {
                  id
                  upVotesID
                  userID
                  upVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              downvotess {
                items {
                  id
                  downVotesID
                  userID
                  downVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteUserUpVotes = /* GraphQL */ `
  mutation DeleteUserUpVotes(
    $input: DeleteUserUpVotesInput!
    $condition: ModelUserUpVotesConditionInput
  ) {
    deleteUserUpVotes(input: $input, condition: $condition) {
      id
      upVotesID
      userID
      upVotes {
        id
        handle
        Users {
          items {
            id
            upVotesID
            userID
            upVotes {
              id
              handle
              Users {
                items {
                  id
                  upVotesID
                  userID
                  upVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            user {
              id
              name
              upvotess {
                items {
                  id
                  upVotesID
                  userID
                  upVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              downvotess {
                items {
                  id
                  downVotesID
                  userID
                  downVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      user {
        id
        name
        upvotess {
          items {
            id
            upVotesID
            userID
            upVotes {
              id
              handle
              Users {
                items {
                  id
                  upVotesID
                  userID
                  upVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            user {
              id
              name
              upvotess {
                items {
                  id
                  upVotesID
                  userID
                  upVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              downvotess {
                items {
                  id
                  downVotesID
                  userID
                  downVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        downvotess {
          items {
            id
            downVotesID
            userID
            downVotes {
              id
              handle
              Users {
                items {
                  id
                  downVotesID
                  userID
                  downVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            user {
              id
              name
              upvotess {
                items {
                  id
                  upVotesID
                  userID
                  upVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              downvotess {
                items {
                  id
                  downVotesID
                  userID
                  downVotes {
                    id
                    handle
                    Users {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  user {
                    id
                    name
                    upvotess {
                      items {
                        id
                        upVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    downvotess {
                      items {
                        id
                        downVotesID
                        userID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      nextToken
                      startedAt
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
