import {
  View,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  Text,
} from 'react-native';
import React from 'react';
import {colors} from '../../theme/colors';
import Input from './Input';
import {useRoute} from '@react-navigation/native';
import {CommentsRouteProp} from '../../types/navigation';
import {useQuery} from '@apollo/client';
import {CommentsByPostQuery, CommentsByPostQueryVariables} from '../../API';
import {commentsByPost} from './queries';
import ApiErrorMessage from '../../components/ApiErrorMessage/ApiErrorMessage';
import fonts from '../../theme/fonts';
import CommentMenu from '../../components/Comment/CommentMenu';

const NoComments = () => <Text style={styles.noComments}>No comments yet</Text>;

const CommentsScreen = () => {
  const route = useRoute<CommentsRouteProp>();
  const {postId} = route.params;

  const {data, loading, error} = useQuery<
    CommentsByPostQuery,
    CommentsByPostQueryVariables
  >(commentsByPost, {variables: {postID: postId}});

  const comments =
    data?.commentsByPost?.items.filter(comment => !comment?._deleted) || [];

  if (loading) {
    return (
      <View style={{paddingTop: 20}}>
        <ActivityIndicator />
      </View>
    );
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
        renderItem={({item}) => <CommentMenu comment={item} includeDetails />}
        style={styles.padding}
        ListEmptyComponent={NoComments}
      />
      <Input postId={postId} />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {flex: 1, backgroundColor: colors.white},
  padding: {padding: 10},
  noComments: {
    padding: 10,
    color: colors.grey,
    fontWeight: fonts.weight.bold,
    fontSize: fonts.size.md,
  },
});

export default CommentsScreen;
