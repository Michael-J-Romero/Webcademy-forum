/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
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
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
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
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
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
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
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
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
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
                ReplyThread {
                  id
                  Thread {
                    id
                    Posts {
                      items {
                        id
                        threadID
                        content
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
      nextToken
      startedAt
    }
  }
`;
export const syncPosts = /* GraphQL */ `
  query SyncPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPosts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
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
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
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
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
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
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
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
                ReplyThread {
                  id
                  Thread {
                    id
                    Posts {
                      items {
                        id
                        threadID
                        content
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
      nextToken
      startedAt
    }
  }
`;
export const getReplyThread = /* GraphQL */ `
  query GetReplyThread($id: ID!) {
    getReplyThread(id: $id) {
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
export const listReplyThreads = /* GraphQL */ `
  query ListReplyThreads(
    $filter: ModelReplyThreadFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReplyThreads(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncReplyThreads = /* GraphQL */ `
  query SyncReplyThreads(
    $filter: ModelReplyThreadFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncReplyThreads(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getDownVotes = /* GraphQL */ `
  query GetDownVotes($id: ID!) {
    getDownVotes(id: $id) {
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
export const listDownVotes = /* GraphQL */ `
  query ListDownVotes(
    $filter: ModelDownVotesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDownVotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncDownVotes = /* GraphQL */ `
  query SyncDownVotes(
    $filter: ModelDownVotesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDownVotes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getUpVotes = /* GraphQL */ `
  query GetUpVotes($id: ID!) {
    getUpVotes(id: $id) {
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
export const listUpVotes = /* GraphQL */ `
  query ListUpVotes(
    $filter: ModelUpVotesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUpVotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncUpVotes = /* GraphQL */ `
  query SyncUpVotes(
    $filter: ModelUpVotesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUpVotes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getThread = /* GraphQL */ `
  query GetThread($id: ID!) {
    getThread(id: $id) {
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
export const listThreads = /* GraphQL */ `
  query ListThreads(
    $filter: ModelThreadFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listThreads(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncThreads = /* GraphQL */ `
  query SyncThreads(
    $filter: ModelThreadFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncThreads(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getDiscussion = /* GraphQL */ `
  query GetDiscussion($id: ID!) {
    getDiscussion(id: $id) {
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
export const listDiscussions = /* GraphQL */ `
  query ListDiscussions(
    $filter: ModelDiscussionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDiscussions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
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
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
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
      nextToken
      startedAt
    }
  }
`;
export const syncDiscussions = /* GraphQL */ `
  query SyncDiscussions(
    $filter: ModelDiscussionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDiscussions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
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
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
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
      nextToken
      startedAt
    }
  }
`;
export const getDownVotesUser = /* GraphQL */ `
  query GetDownVotesUser($id: ID!) {
    getDownVotesUser(id: $id) {
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
export const listDownVotesUsers = /* GraphQL */ `
  query ListDownVotesUsers(
    $filter: ModelDownVotesUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDownVotesUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
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
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
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
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
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
  }
`;
export const syncDownVotesUsers = /* GraphQL */ `
  query SyncDownVotesUsers(
    $filter: ModelDownVotesUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDownVotesUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
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
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
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
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
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
  }
`;
export const getUserUpVotes = /* GraphQL */ `
  query GetUserUpVotes($id: ID!) {
    getUserUpVotes(id: $id) {
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
export const listUserUpVotes = /* GraphQL */ `
  query ListUserUpVotes(
    $filter: ModelUserUpVotesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserUpVotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
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
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
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
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
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
  }
`;
export const syncUserUpVotes = /* GraphQL */ `
  query SyncUserUpVotes(
    $filter: ModelUserUpVotesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserUpVotes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
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
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
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
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
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
  }
`;
