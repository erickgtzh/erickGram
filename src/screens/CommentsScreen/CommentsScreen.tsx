import {View, FlatList, StyleSheet} from 'react-native';
import comments from '../../assets/data/comments.json';
import React from 'react';
import Comment from '../../components/Comment/Comment';
import {colors} from '../../theme/colors';

const CommentsScreen = () => {
  return (
    <View style={styles.content}>
      <FlatList
        data={comments}
        renderItem={({item}) => <Comment comment={item} includeDetails />}
        style={styles.padding}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {flex: 1, backgroundColor: colors.white},
  padding: {padding: 10},
});

export default CommentsScreen;
