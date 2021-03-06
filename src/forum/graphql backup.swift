type Post @model
  @auth(rules: [
    { allow: owner, operations: [read,create,update] }
    { allow: public, operations: [read]},
    { allow: private, operations: [read]},
  ]) {
  id: ID!
  threadID: ID! @index(name: "byThread",queryField: "postsByThreadAndDate", sortKeyFields: ["createdAt"])
  content: String!
  User: User! @hasOne
  UpVotes: UpVotes @hasOne
  DownVotes: DownVotes @hasOne
  ReplyThread: ReplyThread @hasOne
  createdAt: String!
}

type ReplyThread @model 
  @auth(rules: [
    { allow: owner, operations: [read,create,update] }
    { allow: public, operations: [read]},
    { allow: private, operations: [read]},
  ]) {
  id: ID!
  Thread: Thread! @hasOne
  handle: String
}

type DownVotes @model 
  @auth(rules: [
    { allow: owner, operations: [read,create,update] }
    { allow: public, operations: [read]},
    { allow: private, operations: [read]},
  ])  {
  id: ID!
  handle: String
  Users: [User] @manyToMany(relationName: "DownVotesUser")
}

type UpVotes @model 
  @auth(rules: [
    { allow: owner, operations: [read,create,update] }
    { allow: public, operations: [read]},
    { allow: private, operations: [read]},
  ]) {
  id: ID!
  handle: String
  Users: [User!] @manyToMany(relationName: "UserUpVotes")
}

type User @model
  @auth(rules: [
    { allow: owner, operations: [read,create,update] }
    { allow: public, operations: [read]},
    { allow: private, operations: [read]},
  ]){
  id: ID!
  name: String!
  upvotess: [UpVotes] @manyToMany(relationName: "UserUpVotes")
  downvotess: [DownVotes] @manyToMany(relationName: "DownVotesUser")
}

type Thread @model 
  @auth(rules: [
    { allow: owner, operations: [read,create,update] }
    { allow: public, operations: [read]},
    { allow: private, operations: [read]},
  ]) {
  id: ID!
  Posts: [Post!] @hasMany(indexName: "byThread", fields: ["id"])
}

type Discussion @model 
    @auth(rules: [
    { allow: owner, operations: [read,create,update] }
    { allow: public, operations: [read]},
    { allow: private, operations: [read]},
  ]){
  id: ID!
  threadID: ID! @index(name: "byThread",queryField:"DiscussionByThread")
  Thread: Thread! @hasOne
  content: String!
  title: String!
  slug: String
  User: User! @hasOne
}
 