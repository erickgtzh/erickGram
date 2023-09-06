import {View, Image, StyleSheet, TextInput} from 'react-native';
import React, {useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {CreateNavigationProp, CreateRouteProp} from '../../types/navigation';
import {colors} from '../../theme/colors';
import Button from '../../components/Button/Button';
import {useMutation} from '@apollo/client';
import {CreatePostMutation, CreatePostMutationVariables} from '../../API';
import {createPost} from './queries';
import {useAuthContext} from '../../contexts/AuthContext';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import Carousel from '../../components/Carousel/Carousel';

const CreatePostScreen = () => {
  const [description, setDescription] = useState('');
  const {userId} = useAuthContext();
  const navigation = useNavigation<CreateNavigationProp>();

  const route = useRoute<CreateRouteProp>();
  const {image, images, video} = route.params;

  const [doCreatePost] = useMutation<
    CreatePostMutation,
    CreatePostMutationVariables
  >(createPost);

  let content = null;

  if (image) {
    content = (
      <Image
        source={{
          uri: image,
        }}
        style={styles.image}
      />
    );
  } else if (images) {
    content = <Carousel images={images} />;
  } else if (video) {
    content = <VideoPlayer uri={video} />;
  }

  const submit = async () => {
    try {
      await doCreatePost({
        variables: {
          input: {
            image: image,
            images: images,
            video: video,
            description,
            nofComments: 0,
            nofLikes: 0,
            userID: userId,
            type: 'POST',
          },
        },
      });
      navigation.popToTop();
      navigation.navigate('HomeStack');
    } catch (err) {
      console.log((err as Error).message);
    }
  };

  return (
    <View style={styles.root}>
      <View style={styles.container}>{content}</View>
      <TextInput
        value={description}
        onChangeText={setDescription}
        placeholder="Write a caption..."
        style={styles.input}
        multiline
        numberOfLines={5}
        placeholderTextColor={colors.lightgray}
      />

      <Button text="Post" onPress={submit} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 10,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  input: {
    marginVertical: 10,
    alignSelf: 'stretch',
    backgroundColor: colors.white,
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    color: colors.black,
  },
  container: {width: '100%', aspectRatio: 1},
});

export default CreatePostScreen;
