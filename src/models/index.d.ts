import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type PostMetaData = {
  readOnlyFields: 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UpVotesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type DownVotesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ReplyThreadMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ThreadMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type DiscussionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserUpVotesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type DownVotesUserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Post {
  readonly id: string;
  readonly threadID: string;
  readonly content: string;
  readonly User: User;
  readonly UpVotes?: UpVotes | null;
  readonly DownVotes?: DownVotes | null;
  readonly ReplyThread?: ReplyThread | null;
  readonly type: string;
  readonly createdAt: string;
  readonly updatedAt?: string | null;
  readonly postUserId: string;
  readonly postUpVotesId?: string | null;
  readonly postDownVotesId?: string | null;
  readonly postReplyThreadId?: string | null;
  constructor(init: ModelInit<Post, PostMetaData>);
  static copyOf(source: Post, mutator: (draft: MutableModel<Post, PostMetaData>) => MutableModel<Post, PostMetaData> | void): Post;
}

export declare class User {
  readonly id: string;
  readonly name: string;
  readonly upvotess?: (UserUpVotes | null)[] | null;
  readonly downvotess?: (DownVotesUser | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

export declare class UpVotes {
  readonly id: string;
  readonly handle?: string | null;
  readonly Users?: UserUpVotes[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<UpVotes, UpVotesMetaData>);
  static copyOf(source: UpVotes, mutator: (draft: MutableModel<UpVotes, UpVotesMetaData>) => MutableModel<UpVotes, UpVotesMetaData> | void): UpVotes;
}

export declare class DownVotes {
  readonly id: string;
  readonly handle?: string | null;
  readonly Users?: (DownVotesUser | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<DownVotes, DownVotesMetaData>);
  static copyOf(source: DownVotes, mutator: (draft: MutableModel<DownVotes, DownVotesMetaData>) => MutableModel<DownVotes, DownVotesMetaData> | void): DownVotes;
}

export declare class ReplyThread {
  readonly id: string;
  readonly Thread: Thread;
  readonly handle?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly replyThreadThreadId: string;
  constructor(init: ModelInit<ReplyThread, ReplyThreadMetaData>);
  static copyOf(source: ReplyThread, mutator: (draft: MutableModel<ReplyThread, ReplyThreadMetaData>) => MutableModel<ReplyThread, ReplyThreadMetaData> | void): ReplyThread;
}

export declare class Thread {
  readonly id: string;
  readonly Posts?: Post[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Thread, ThreadMetaData>);
  static copyOf(source: Thread, mutator: (draft: MutableModel<Thread, ThreadMetaData>) => MutableModel<Thread, ThreadMetaData> | void): Thread;
}

export declare class Discussion {
  readonly id: string;
  readonly Thread: Thread;
  readonly content: string;
  readonly title: string;
  readonly slug?: string | null;
  readonly User: User;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly discussionThreadId: string;
  readonly discussionUserId: string;
  constructor(init: ModelInit<Discussion, DiscussionMetaData>);
  static copyOf(source: Discussion, mutator: (draft: MutableModel<Discussion, DiscussionMetaData>) => MutableModel<Discussion, DiscussionMetaData> | void): Discussion;
}

export declare class UserUpVotes {
  readonly id: string;
  readonly user: User;
  readonly upVotes: UpVotes;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<UserUpVotes, UserUpVotesMetaData>);
  static copyOf(source: UserUpVotes, mutator: (draft: MutableModel<UserUpVotes, UserUpVotesMetaData>) => MutableModel<UserUpVotes, UserUpVotesMetaData> | void): UserUpVotes;
}

export declare class DownVotesUser {
  readonly id: string;
  readonly user: User;
  readonly downVotes: DownVotes;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<DownVotesUser, DownVotesUserMetaData>);
  static copyOf(source: DownVotesUser, mutator: (draft: MutableModel<DownVotesUser, DownVotesUserMetaData>) => MutableModel<DownVotesUser, DownVotesUserMetaData> | void): DownVotesUser;
}