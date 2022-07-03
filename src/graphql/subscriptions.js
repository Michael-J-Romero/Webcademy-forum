/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($owner: String) {
    onCreatePost(owner: $owner) {
      id
      threadID
      content
      User {
        id
        name
        upvotess {
          nextToken
        }
        downvotess {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      UpVotes {
        id
        handle
        Users {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      DownVotes {
        id
        handle
        Users {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      ReplyThread {
        id
        Thread {
          id
          createdAt
          updatedAt
          owner
        }
        handle
        createdAt
        updatedAt
        replyThreadThreadId
        owner
      }
      createdAt
      updatedAt
      postUserId
      postUpVotesId
      postDownVotesId
      postReplyThreadId
      owner
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($owner: String) {
    onUpdatePost(owner: $owner) {
      id
      threadID
      content
      User {
        id
        name
        upvotess {
          nextToken
        }
        downvotess {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      UpVotes {
        id
        handle
        Users {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      DownVotes {
        id
        handle
        Users {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      ReplyThread {
        id
        Thread {
          id
          createdAt
          updatedAt
          owner
        }
        handle
        createdAt
        updatedAt
        replyThreadThreadId
        owner
      }
      createdAt
      updatedAt
      postUserId
      postUpVotesId
      postDownVotesId
      postReplyThreadId
      owner
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($owner: String) {
    onDeletePost(owner: $owner) {
      id
      threadID
      content
      User {
        id
        name
        upvotess {
          nextToken
        }
        downvotess {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      UpVotes {
        id
        handle
        Users {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      DownVotes {
        id
        handle
        Users {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      ReplyThread {
        id
        Thread {
          id
          createdAt
          updatedAt
          owner
        }
        handle
        createdAt
        updatedAt
        replyThreadThreadId
        owner
      }
      createdAt
      updatedAt
      postUserId
      postUpVotesId
      postDownVotesId
      postReplyThreadId
      owner
    }
  }
`;
export const onCreateReplyThread = /* GraphQL */ `
  subscription OnCreateReplyThread($owner: String) {
    onCreateReplyThread(owner: $owner) {
      id
      Thread {
        id
        Posts {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      handle
      createdAt
      updatedAt
      replyThreadThreadId
      owner
    }
  }
`;
export const onUpdateReplyThread = /* GraphQL */ `
  subscription OnUpdateReplyThread($owner: String) {
    onUpdateReplyThread(owner: $owner) {
      id
      Thread {
        id
        Posts {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      handle
      createdAt
      updatedAt
      replyThreadThreadId
      owner
    }
  }
`;
export const onDeleteReplyThread = /* GraphQL */ `
  subscription OnDeleteReplyThread($owner: String) {
    onDeleteReplyThread(owner: $owner) {
      id
      Thread {
        id
        Posts {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      handle
      createdAt
      updatedAt
      replyThreadThreadId
      owner
    }
  }
`;
export const onCreateDownVotes = /* GraphQL */ `
  subscription OnCreateDownVotes($owner: String) {
    onCreateDownVotes(owner: $owner) {
      id
      handle
      Users {
        items {
          id
          downVotesID
          userID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateDownVotes = /* GraphQL */ `
  subscription OnUpdateDownVotes($owner: String) {
    onUpdateDownVotes(owner: $owner) {
      id
      handle
      Users {
        items {
          id
          downVotesID
          userID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteDownVotes = /* GraphQL */ `
  subscription OnDeleteDownVotes($owner: String) {
    onDeleteDownVotes(owner: $owner) {
      id
      handle
      Users {
        items {
          id
          downVotesID
          userID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateUpVotes = /* GraphQL */ `
  subscription OnCreateUpVotes($owner: String) {
    onCreateUpVotes(owner: $owner) {
      id
      handle
      Users {
        items {
          id
          upVotesID
          userID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateUpVotes = /* GraphQL */ `
  subscription OnUpdateUpVotes($owner: String) {
    onUpdateUpVotes(owner: $owner) {
      id
      handle
      Users {
        items {
          id
          upVotesID
          userID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteUpVotes = /* GraphQL */ `
  subscription OnDeleteUpVotes($owner: String) {
    onDeleteUpVotes(owner: $owner) {
      id
      handle
      Users {
        items {
          id
          upVotesID
          userID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String) {
    onCreateUser(owner: $owner) {
      id
      name
      upvotess {
        items {
          id
          upVotesID
          userID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      downvotess {
        items {
          id
          downVotesID
          userID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String) {
    onUpdateUser(owner: $owner) {
      id
      name
      upvotess {
        items {
          id
          upVotesID
          userID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      downvotess {
        items {
          id
          downVotesID
          userID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String) {
    onDeleteUser(owner: $owner) {
      id
      name
      upvotess {
        items {
          id
          upVotesID
          userID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      downvotess {
        items {
          id
          downVotesID
          userID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateThread = /* GraphQL */ `
  subscription OnCreateThread($owner: String) {
    onCreateThread(owner: $owner) {
      id
      Posts {
        items {
          id
          threadID
          content
          createdAt
          updatedAt
          postUserId
          postUpVotesId
          postDownVotesId
          postReplyThreadId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateThread = /* GraphQL */ `
  subscription OnUpdateThread($owner: String) {
    onUpdateThread(owner: $owner) {
      id
      Posts {
        items {
          id
          threadID
          content
          createdAt
          updatedAt
          postUserId
          postUpVotesId
          postDownVotesId
          postReplyThreadId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteThread = /* GraphQL */ `
  subscription OnDeleteThread($owner: String) {
    onDeleteThread(owner: $owner) {
      id
      Posts {
        items {
          id
          threadID
          content
          createdAt
          updatedAt
          postUserId
          postUpVotesId
          postDownVotesId
          postReplyThreadId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateDiscussion = /* GraphQL */ `
  subscription OnCreateDiscussion($owner: String) {
    onCreateDiscussion(owner: $owner) {
      id
      threadID
      Thread {
        id
        Posts {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      content
      title
      slug
      User {
        id
        name
        upvotess {
          nextToken
        }
        downvotess {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      category
      createdAt
      updatedAt
      discussionUserId
      owner
    }
  }
`;
export const onUpdateDiscussion = /* GraphQL */ `
  subscription OnUpdateDiscussion($owner: String) {
    onUpdateDiscussion(owner: $owner) {
      id
      threadID
      Thread {
        id
        Posts {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      content
      title
      slug
      User {
        id
        name
        upvotess {
          nextToken
        }
        downvotess {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      category
      createdAt
      updatedAt
      discussionUserId
      owner
    }
  }
`;
export const onDeleteDiscussion = /* GraphQL */ `
  subscription OnDeleteDiscussion($owner: String) {
    onDeleteDiscussion(owner: $owner) {
      id
      threadID
      Thread {
        id
        Posts {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      content
      title
      slug
      User {
        id
        name
        upvotess {
          nextToken
        }
        downvotess {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      category
      createdAt
      updatedAt
      discussionUserId
      owner
    }
  }
`;
export const onCreateDownVotesUser = /* GraphQL */ `
  subscription OnCreateDownVotesUser($owner: String) {
    onCreateDownVotesUser(owner: $owner) {
      id
      downVotesID
      userID
      downVotes {
        id
        handle
        Users {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      user {
        id
        name
        upvotess {
          nextToken
        }
        downvotess {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateDownVotesUser = /* GraphQL */ `
  subscription OnUpdateDownVotesUser($owner: String) {
    onUpdateDownVotesUser(owner: $owner) {
      id
      downVotesID
      userID
      downVotes {
        id
        handle
        Users {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      user {
        id
        name
        upvotess {
          nextToken
        }
        downvotess {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteDownVotesUser = /* GraphQL */ `
  subscription OnDeleteDownVotesUser($owner: String) {
    onDeleteDownVotesUser(owner: $owner) {
      id
      downVotesID
      userID
      downVotes {
        id
        handle
        Users {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      user {
        id
        name
        upvotess {
          nextToken
        }
        downvotess {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateUserUpVotes = /* GraphQL */ `
  subscription OnCreateUserUpVotes($owner: String) {
    onCreateUserUpVotes(owner: $owner) {
      id
      upVotesID
      userID
      upVotes {
        id
        handle
        Users {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      user {
        id
        name
        upvotess {
          nextToken
        }
        downvotess {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateUserUpVotes = /* GraphQL */ `
  subscription OnUpdateUserUpVotes($owner: String) {
    onUpdateUserUpVotes(owner: $owner) {
      id
      upVotesID
      userID
      upVotes {
        id
        handle
        Users {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      user {
        id
        name
        upvotess {
          nextToken
        }
        downvotess {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteUserUpVotes = /* GraphQL */ `
  subscription OnDeleteUserUpVotes($owner: String) {
    onDeleteUserUpVotes(owner: $owner) {
      id
      upVotesID
      userID
      upVotes {
        id
        handle
        Users {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      user {
        id
        name
        upvotess {
          nextToken
        }
        downvotess {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
