import {useMutation, useQuery} from '@apollo/client';
import {
  CreateLikeMutation,
  CreateLikeMutationVariables,
  DeleteLikeMutation,
  DeleteUserMutationVariables,
  LikesForPostByUserQuery,
  LikesForPostByUserQueryVariables,
  Post,
  UpdatePostMutation,
  UpdatePostMutationVariables,
} from '../../API';
import {
  createLike,
  deleteLike,
  likesForPostByUser,
  updatePost,
} from './queries';
import {useAuthContext} from '../../contexts/AuthContext';

const useLikeService = (post: Post) => {
  const {userId} = useAuthContext();

  const {data: usersLikeData} = useQuery<
    LikesForPostByUserQuery,
    LikesForPostByUserQueryVariables
  >(likesForPostByUser, {
    variables: {
      postID: post.id,
      userID: {
        eq: userId,
      },
    },
  });

  const [doUpdatePost] = useMutation<
    UpdatePostMutation,
    UpdatePostMutationVariables
  >(updatePost);

  const [doCreateLike] = useMutation<
    CreateLikeMutation,
    CreateLikeMutationVariables
  >(createLike, {
    variables: {input: {userID: userId, postID: post.id}},
    refetchQueries: ['LikesForPostByUser'],
  });

  const [doDeleteLike] = useMutation<
    DeleteLikeMutation,
    DeleteUserMutationVariables
  >(deleteLike);

  const userLike = usersLikeData?.likesForPostByUser?.items?.filter(
    like => !like?._deleted,
  )?.[0];

  const incrementNofLikes = (amount: 1 | -1) => {
    doUpdatePost({
      variables: {
        input: {
          id: post.id,
          _version: post._version,
          nofLikes: post.nofLikes + amount,
        },
      },
    });
  };

  const onAddLike = () => {
    doCreateLike();
    incrementNofLikes(1);
  };

  const onDeleteLike = () => {
    if (!userLike) {
      return;
    }

    doDeleteLike({
      variables: {
        input: {
          id: userLike.id,
          _version: userLike._version,
        },
      },
    });
    incrementNofLikes(-1);
  };

  const toggleIsLiked = () => {
    if (userLike) {
      onDeleteLike();
    } else {
      onAddLike();
    }
  };

  return {
    toggleIsLiked,
    isLiked: !!userLike,
  };
};

export default useLikeService;
