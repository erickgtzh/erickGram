import {View, Text, Image, StyleSheet, TextInput, Alert} from 'react-native';
import React from 'react';
import {colors} from '../../theme/colors';
import fonts from '../../theme/fonts';
import {DEFAULT_USER_IMAGE} from '../../config';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import useCommentService from '../../services/CommentsService/CommentsService';

interface IInput {
  postId: string;
}

const Input = ({postId}: IInput) => {
  const [newComment, setNewComment] = React.useState('');

  const {onCreateComment} = useCommentService(postId);

  const insets = useSafeAreaInsets();

  const onPost = async () => {
    if (!newComment || newComment.length < 1) {
      return Alert.alert('Comment must be at least 1 character long');
    }
    onCreateComment(newComment);
    setNewComment('');
  };

  return (
    <View style={[styles.root, {paddingBottom: insets.bottom}]}>
      <Image
        source={{
          uri: DEFAULT_USER_IMAGE,
        }}
        style={styles.image}
      />
      <TextInput
        style={styles.input}
        onChangeText={setNewComment}
        placeholder="Write your comment here..."
        placeholderTextColor={colors.lightgray}
        value={newComment}
        multiline
      />
      <Text
        style={[styles.button, {paddingBottom: insets.bottom + 11}]}
        onPress={onPost}>
        POST
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    padding: 5,
    borderTopWidth: 1,
    borderColor: colors.border,
    alignItems: 'flex-end',
  },
  image: {
    width: 40,
    aspectRatio: 1,
    borderRadius: 20,
  },
  button: {
    color: colors.primary,
    position: 'absolute',
    right: 15,
    fontSize: fonts.size.sm,
    fontWeight: fonts.weight.full,
  },
  input: {
    flex: 1,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 25,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginLeft: 5,
    color: colors.black,
    paddingRight: 50,
  },
});

export default Input;
