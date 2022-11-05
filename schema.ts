import type { Lists } from '.keystone/types';
import Post from './schema/post';
import Tag from './schema/tag';
import User from './schema/user';

export const lists: Lists = {
  User: User,
  Post: Post,
  Tag: Tag
};
