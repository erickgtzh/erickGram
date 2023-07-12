import {View, Text, Image, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import {colors} from '../../theme/colors';
import fonts from '../../theme/fonts';

const Input = () => {
  const [newComment, setNewComment] = React.useState('');

  const onPost = () => {
    console.log('Posting the comment...');
    // sending the data to backend
    setNewComment('');
  };

  return (
    <View style={styles.root}>
      <Image
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/2.jpg',
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
      <Text style={styles.button} onPress={onPost}>
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
    bottom: 15,
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
