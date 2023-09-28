// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Like, CommentLike, Comment, Post, User, UserFollow, UserFeedPost } = initSchema(schema);

export {
  Like,
  CommentLike,
  Comment,
  Post,
  User,
  UserFollow,
  UserFeedPost
};