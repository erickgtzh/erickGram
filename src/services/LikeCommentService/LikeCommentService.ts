import {useMutation, useQuery} from '@apollo/client';
import {
  Comment,
  CreateCommentLikeMutation,
  CreateCommentLikeMutationVariables,
  DeleteCommentLikeMutation,
  DeleteCommentLikeMutationVariables,
  LikesForCommentByUserQuery,
  LikesForCommentByUserQueryVariables,
  UpdateCommentMutation,
  UpdateCommentMutationVariables,
} from '../../API';
import {
  createCommentLike,
  updateComment,
  likesForCommentByUser,
  deleteCommentLike,
} from './queries';
import {useAuthContext} from '../../contexts/AuthContext';
import {Alert} from 'react-native';

const useCommentLikeService = (comment: Comment) => {
  const {userId} = useAuthContext();

  const [doUpdateComment] = useMutation<
    UpdateCommentMutation,
    UpdateCommentMutationVariables
  >(updateComment);

  const [doCreateCommentLike, {error}] = useMutation<
    CreateCommentLikeMutation,
    CreateCommentLikeMutationVariables
  >(createCommentLike, {
    variables: {input: {userID: userId, commentID: comment.id}},
    refetchQueries: ['LikesForCommentByUser'],
  });

  if (error) {
    console.log('este es el error we ', error);
  }

  const {data: usersLikesData} = useQuery<
    LikesForCommentByUserQuery,
    LikesForCommentByUserQueryVariables
  >(likesForCommentByUser, {
    variables: {
      commentID: comment.id,
      userID: {
        eq: userId,
      },
    },
  });

  const [doDeleteLike] = useMutation<
    DeleteCommentLikeMutation,
    DeleteCommentLikeMutationVariables
  >(deleteCommentLike);

  const incrementNofLikes = (amount: 1 | -1) => {
    if (!comment) {
      Alert.alert('Error updating comment, please try again');
      return;
    }

    doUpdateComment({
      variables: {
        input: {
          id: comment.id,
          _version: comment._version,
          nofLikes: comment.nofLikes + amount,
        },
      },
    });
  };

  const userLike = usersLikesData?.likesForCommentByUser?.items?.filter(
    like => !like?._deleted,
  )?.[0];

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

  const onAddLike = () => {
    doCreateCommentLike();
    incrementNofLikes(1);
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
    incrementNofLikes,
    isLiked: !!userLike,
  };
};

export default useCommentLikeService;
