import {View, ActivityIndicator, ScrollView} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import {GetPostQuery, GetPostQueryVariables} from '../../API';
import {useQuery} from '@apollo/client';
import {getPost} from './queries';
import ApiErrorMessage from '../../components/ApiErrorMessage';
import FeedPost from '../../components/FeedPost';
import {colors} from '../../theme/colors';

const PostScreen = () => {
  const route = useRoute();

  const {data, loading, error} = useQuery<GetPostQuery, GetPostQueryVariables>(
    getPost,
    {
      variables: {
        id: route.params?.id || '',
      },
    },
  );

  if (loading) {
    return (
      <View style={{paddingTop: 20}}>
        <ActivityIndicator />
      </View>
    );
  }

  if (error) {
    return (
      <ApiErrorMessage title="Error fetching post" message={error?.message} />
    );
  }

  return (
    <ScrollView
      style={{
        backgroundColor: colors.lightgray,
      }}>
      <FeedPost post={data?.getPost} />
    </ScrollView>
  );
};

export default PostScreen;
