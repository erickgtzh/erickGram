import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";





type EagerLike = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Like, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userID: string;
  readonly postID: string;
  readonly User?: User | null;
  readonly Post?: Post | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyLike = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Like, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userID: string;
  readonly postID: string;
  readonly User: AsyncItem<User | undefined>;
  readonly Post: AsyncItem<Post | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Like = LazyLoading extends LazyLoadingDisabled ? EagerLike : LazyLike

export declare const Like: (new (init: ModelInit<Like>) => Like) & {
  copyOf(source: Like, mutator: (draft: MutableModel<Like>) => MutableModel<Like> | void): Like;
}

type EagerCommentLike = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CommentLike, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userID: string;
  readonly commentID: string;
  readonly User?: User | null;
  readonly Comment?: Comment | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCommentLike = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CommentLike, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userID: string;
  readonly commentID: string;
  readonly User: AsyncItem<User | undefined>;
  readonly Comment: AsyncItem<Comment | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CommentLike = LazyLoading extends LazyLoadingDisabled ? EagerCommentLike : LazyCommentLike

export declare const CommentLike: (new (init: ModelInit<CommentLike>) => CommentLike) & {
  copyOf(source: CommentLike, mutator: (draft: MutableModel<CommentLike>) => MutableModel<CommentLike> | void): CommentLike;
}

type EagerComment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Comment, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly createdAt: string;
  readonly comment: string;
  readonly userID: string;
  readonly postID: string;
  readonly nofLikes: number;
  readonly User?: User | null;
  readonly Post?: Post | null;
  readonly CommentLikes?: (CommentLike | null)[] | null;
  readonly updatedAt?: string | null;
}

type LazyComment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Comment, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly createdAt: string;
  readonly comment: string;
  readonly userID: string;
  readonly postID: string;
  readonly nofLikes: number;
  readonly User: AsyncItem<User | undefined>;
  readonly Post: AsyncItem<Post | undefined>;
  readonly CommentLikes: AsyncCollection<CommentLike>;
  readonly updatedAt?: string | null;
}

export declare type Comment = LazyLoading extends LazyLoadingDisabled ? EagerComment : LazyComment

export declare const Comment: (new (init: ModelInit<Comment>) => Comment) & {
  copyOf(source: Comment, mutator: (draft: MutableModel<Comment>) => MutableModel<Comment> | void): Comment;
}

type EagerPost = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Post, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly createdAt: string;
  readonly type: string;
  readonly description?: string | null;
  readonly location?: string | null;
  readonly image?: string | null;
  readonly images?: string[] | null;
  readonly video?: string | null;
  readonly nofComments: number;
  readonly nofLikes: number;
  readonly userID: string;
  readonly User?: User | null;
  readonly Likes?: (Like | null)[] | null;
  readonly Comments?: (Comment | null)[] | null;
  readonly updatedAt?: string | null;
}

type LazyPost = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Post, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly createdAt: string;
  readonly type: string;
  readonly description?: string | null;
  readonly location?: string | null;
  readonly image?: string | null;
  readonly images?: string[] | null;
  readonly video?: string | null;
  readonly nofComments: number;
  readonly nofLikes: number;
  readonly userID: string;
  readonly User: AsyncItem<User | undefined>;
  readonly Likes: AsyncCollection<Like>;
  readonly Comments: AsyncCollection<Comment>;
  readonly updatedAt?: string | null;
}

export declare type Post = LazyLoading extends LazyLoadingDisabled ? EagerPost : LazyPost

export declare const Post: (new (init: ModelInit<Post>) => Post) & {
  copyOf(source: Post, mutator: (draft: MutableModel<Post>) => MutableModel<Post> | void): Post;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly email?: string | null;
  readonly username?: string | null;
  readonly bio?: string | null;
  readonly website?: string | null;
  readonly nofPosts: number;
  readonly nofFollowers: number;
  readonly nofFollowings: number;
  readonly image?: string | null;
  readonly Comments?: (Comment | null)[] | null;
  readonly Posts?: (Post | null)[] | null;
  readonly Likes?: (Like | null)[] | null;
  readonly CommentLikes?: (CommentLike | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly email?: string | null;
  readonly username?: string | null;
  readonly bio?: string | null;
  readonly website?: string | null;
  readonly nofPosts: number;
  readonly nofFollowers: number;
  readonly nofFollowings: number;
  readonly image?: string | null;
  readonly Comments: AsyncCollection<Comment>;
  readonly Posts: AsyncCollection<Post>;
  readonly Likes: AsyncCollection<Like>;
  readonly CommentLikes: AsyncCollection<CommentLike>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}