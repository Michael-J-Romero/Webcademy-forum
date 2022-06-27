// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Post, User, UpVotes, DownVotes, ReplyThread, Thread, Discussion, UserUpVotes, DownVotesUser } = initSchema(schema);

export {
  Post,
  User,
  UpVotes,
  DownVotes,
  ReplyThread,
  Thread,
  Discussion,
  UserUpVotes,
  DownVotesUser
};