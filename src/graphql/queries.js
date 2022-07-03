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
          createdAt
          updatedAt
          owner
        }
        UpVotes {
          id
          handle
          createdAt
          updatedAt
          owner
        }
        DownVotes {
          id
          handle
          createdAt
          updatedAt
          owner
        }
        ReplyThread {
          id
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
      nextToken
    }
  }
`;
export const postsByThreadAndDate = /* GraphQL */ `
  query PostsByThreadAndDate(
    $threadID: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    postsByThreadAndDate(
      threadID: $threadID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        threadID
        content
        User {
          id
          name
          createdAt
          updatedAt
          owner
        }
        UpVotes {
          id
          handle
          createdAt
          updatedAt
          owner
        }
        DownVotes {
          id
          handle
          createdAt
          updatedAt
          owner
        }
        ReplyThread {
          id
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
      nextToken
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
      nextToken
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
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
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
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
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
          nextToken
        }
        downvotess {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
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
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getDiscussion = /* GraphQL */ `
  query GetDiscussion($id: ID!) {
    getDiscussion(id: $id) {
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
export const listDiscussions = /* GraphQL */ `
  query ListDiscussions(
    $filter: ModelDiscussionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDiscussions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        threadID
        Thread {
          id
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
      nextToken
    }
  }
`;
export const discussionByThread = /* GraphQL */ `
  query DiscussionByThread(
    $threadID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelDiscussionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    DiscussionByThread(
      threadID: $threadID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        threadID
        Thread {
          id
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
      nextToken
    }
  }
`;
export const discussionByCategory = /* GraphQL */ `
  query DiscussionByCategory(
    $category: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelDiscussionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    DiscussionByCategory(
      category: $category
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        threadID
        Thread {
          id
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
      nextToken
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
          createdAt
          updatedAt
          owner
        }
        user {
          id
          name
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
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
          createdAt
          updatedAt
          owner
        }
        user {
          id
          name
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
