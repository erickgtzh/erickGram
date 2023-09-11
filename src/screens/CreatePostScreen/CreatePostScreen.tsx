import {View, Image, StyleSheet, TextInput, Alert, Text} from 'react-native';
import React, {useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {CreateNavigationProp, CreateRouteProp} from '../../types/navigation';
import {colors} from '../../theme/colors';
import Button from '../../components/Button/Button';
import {useMutation} from '@apollo/client';
import {
  CreatePostInput,
  CreatePostMutation,
  CreatePostMutationVariables,
} from '../../API';
import {createPost} from './queries';
import {useAuthContext} from '../../contexts/AuthContext';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import Carousel from '../../components/Carousel/Carousel';
import {v4 as uuidV4} from 'uuid';
import {Storage} from 'aws-amplify';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import fonts from '../../theme/fonts';

const CreatePostScreen = () => {
  const [description, setDescription] = useState('');
  const {userId} = useAuthContext();
  const navigation = useNavigation<CreateNavigationProp>();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [progress, setProgress] = useState(0);

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
    content = <VideoPlayer uri={video} paused={false} />;
  }

  const uploadMedia = async (uri: string) => {
    try {
      const response = await fetch(uri);
      const blob = await response.blob();
      const extension = uri.split('.').pop();
      const s3Response = await Storage.put(`${uuidV4()}.${extension}`, blob, {
        progressCallback(newProgress) {
          setProgress(newProgress.loaded / newProgress.total);
        },
      });
      return s3Response.key;
    } catch (err) {
      Alert.alert('Error uploading image');
      console.log((err as Error).message);
    }
    return uri;
  };

  const submit = async () => {
    if (isSubmitting) {
      return;
    }
    setIsSubmitting(true);

    const input: CreatePostInput = {
      image: undefined,
      images: undefined,
      video: undefined,
      description,
      nofComments: 0,
      nofLikes: 0,
      userID: userId,
      type: 'POST',
    };

    if (image) {
      input.image = await uploadMedia(image);
    } else if (images) {
      const imageKeys = await Promise.all(images.map(img => uploadMedia(img)));
      input.images = imageKeys.filter(key => key) as string[];
    } else if (video) {
      input.video = await uploadMedia(video);
    }

    try {
      await doCreatePost({
        variables: {
          input,
        },
      });
      setIsSubmitting(false);
      navigation.popToTop();
      navigation.navigate('HomeStack');
    } catch (err) {
      console.log((err as Error).message);
      setIsSubmitting(false);
    }
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.root}>
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

      {isSubmitting ? (
        <View style={styles.progressContainer}>
          <View style={[styles.progress, {width: `${progress * 100}%`}]} />
          <Text style={styles.progressText}>
            Uploading {Math.floor(progress * 100)}%
          </Text>
        </View>
      ) : (
        <Button
          text={isSubmitting ? 'Submitting...' : 'Submit'}
          onPress={submit}
        />
      )}
    </KeyboardAwareScrollView>
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
  progressContainer: {
    marginTop: 5,
    backgroundColor: colors.lightgray,
    width: '100%',
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    marginVertical: 10,
  },
  progress: {
    backgroundColor: colors.primary,
    position: 'absolute',
    height: '100%',
    width: '30%',
    alignSelf: 'flex-start',
    borderRadius: 25,
  },
  progressText: {
    color: colors.white,
    fontWeight: fonts.weight.bold,
  },
});

export default CreatePostScreen;
