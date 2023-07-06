import React, {useRef, useState} from 'react';
import {FlatList, StyleSheet, View, ViewToken} from 'react-native';
import FeedPost from '../../components/FeedPost/FeedPost';
import posts from '../../assets/data/posts.json';

const HomeScreen = () => {
  const [activePostId, setActivePostId] = useState<string | null>(null);
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

  return (
    <View style={styles.app}>
      <FlatList
        data={posts}
        renderItem={({item}) => (
          <FeedPost post={item} isVisible={activePostId} />
        )}
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
