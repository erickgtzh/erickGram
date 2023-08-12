import React, {useRef, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  View,
  ViewToken,
} from 'react-native';
import FeedPost from '../../components/FeedPost/FeedPost';
import {useQuery} from '@apollo/client';
import {listPosts} from './queries';
import {ListPostsQuery, ListPostsQueryVariables} from '../../API';
import ApiErrorMessage from '../../components/ApiErrorMessage/ApiErrorMessage';

const HomeScreen = () => {
  const [activePostId, setActivePostId] = useState<string | null>(null);
  const {data, loading, error} = useQuery<
    ListPostsQuery,
    ListPostsQueryVariables
  >(listPosts);

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 51,
  };

  const onViewableItemsChanged = useRef(
    ({viewableItems}: {viewableItems: Array<ViewToken>}) => {
      if (viewableItems?.length > 0) {
        setActivePostId(viewableItems[0].item.id);
      }
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
      <ApiErrorMessage title="Error fetching posts" message={error.message} />
    );
  }

  const posts = data?.listPosts?.items || [];

  return (
    <View style={styles.app}>
      <FlatList
        data={posts}
        renderItem={({item}) =>
          item && <FeedPost post={item} isVisible={item.id === activePostId} />
        }
        showsVerticalScrollIndicator={false}
        viewabilityConfig={viewabilityConfig}
        onViewableItemsChanged={onViewableItemsChanged.current}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  app: {flex: 1},
});

export default HomeScreen;
