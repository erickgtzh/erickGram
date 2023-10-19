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
  createNotification,
  deleteLike,
  likesForPostByUser,
  updatePost,
} from './queries';
import {useAuthContext} from '../../contexts/AuthContext';
import {NotificationTypes} from '../../models';

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

  const [doCreateNotification] = useMutation(createNotification, {
    variables: {
      input: {
        type: NotificationTypes.NEW_LIKE,
        userId: post.userID,
        actorId: userId,
        readAt: 0,
        notificationPostId: post.id,
      },
    },
  });

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

  const onAddLike = async () => {
    try {
      await doCreateLike().catch(error => {
        console.error('doCreateLike Error:', error);
        throw error;
      });

      await doCreateNotification().catch(error => {
        console.error('doCreateNotification Error:', error);
        throw error;
      });

      incrementNofLikes(1);
    } catch (error) {
      console.error('onAddLike Error:', error);
    }
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
