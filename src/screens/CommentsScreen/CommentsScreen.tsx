import React from 'react';
import {useQuery, useSubscription} from '@apollo/client';
import {useRoute} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import {
  Comment as CommentType,
  CommentsByPostQuery,
  CommentsByPostQueryVariables,
  ModelSortDirection,
  OnCreateCommentByPostIdSubscription,
  OnCreateCommentByPostIdSubscriptionVariables,
} from '../../API';
import ApiErrorMessage from '../../components/ApiErrorMessage';
import Comment from '../../components/Comment';
import {CommentsRouteProp} from '../../types/navigation';
import Input from './Input';
import {commentsByPost, onCreateCommentByPostId} from './queries';
import {colors} from '../../theme/colors';
import fonts from '../../theme/fonts';

const NoComments = () => <Text style={styles.noComments}>No comments yet</Text>;

const CommentsScreen = () => {
  const route = useRoute<CommentsRouteProp>();
  const {postId} = route.params;

  const [newComments, setNewComments] = useState<CommentType[]>([]);

  const {data, loading, error, fetchMore, refetch} = useQuery<
    CommentsByPostQuery,
    CommentsByPostQueryVariables
  >(commentsByPost, {
    variables: {
      postID: postId,
      sortDirection: ModelSortDirection.DESC,
      limit: 20,
    },
  });

  const {data: newCommentsData} = useSubscription<
    OnCreateCommentByPostIdSubscription,
    OnCreateCommentByPostIdSubscriptionVariables
  >(onCreateCommentByPostId, {variables: {postID: postId}});

  const [isFetchingMore, setIsFetchingMore] = useState(false);

  const comments =
    data?.commentsByPost?.items.filter(comment => !comment?._deleted) || [];
  const nextToken = data?.commentsByPost?.nextToken;

  useEffect(() => {
    if (newCommentsData?.onCreateCommentByPostId) {
      const allComments = newComments.concat(
        newCommentsData.onCreateCommentByPostId as CommentType,
      );
      setNewComments(allComments);
    }
    refetch();
  }, [newCommentsData]);

  const isNewComment = (comment: CommentType) => {
    return newComments.some(newComment => newComment.id === comment.id);
  };

  const loadMore = async () => {
    if (!nextToken || isFetchingMore) {
      return;
    }
    setIsFetchingMore(true);
    await fetchMore({variables: {nextToken}});
    setIsFetchingMore(false);
  };

  if (loading) {
    <View style={{paddingTop: 20}}>
      <ActivityIndicator />
    </View>;
  }

  if (error) {
    return (
      <ApiErrorMessage
        title="Error fetching comments"
        message={error.message}
      />
    );
  }

  return (
    <View style={styles.content}>
      <FlatList
        data={comments}
        renderItem={({item}) =>
          item && (
            <Comment
              comment={item}
              includeDetails
              isNewComment={isNewComment(item)}
              key={item.id}
            />
          )
        }
        style={styles.padding}
        inverted={comments.length !== 0 ? true : false}
        ListEmptyComponent={NoComments}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
      />
      <Input postId={postId} />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {flex: 1, backgroundColor: colors.white},
  padding: {
    padding: 10,
    paddingTop: 0,
  },
  noComments: {
    color: colors.grey,
    fontWeight: fonts.weight.bold,
    fontSize: fonts.size.md,
  },
  loadMore: {
    color: colors.primary,
    fontWeight: fonts.weight.bold,
    fontSize: fonts.size.md,
    paddingBottom: 15,
  },
});

export default CommentsScreen;
