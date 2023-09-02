import {View, Text, Image, ActivityIndicator, Alert} from 'react-native';
import React, {useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {Asset, launchImageLibrary} from 'react-native-image-picker';
import {
  DeleteUserMutation,
  DeleteUserMutationVariables,
  GetUserQuery,
  GetUserQueryVariables,
  UpdateUserMutation,
  UpdateUserMutationVariables,
} from '../../API';
import {useLazyQuery, useMutation, useQuery} from '@apollo/client';
import {deleteUser, getUser, updateUser, usersByUsername} from './queries';
import ApiErrorMessage from '../../components/ApiErrorMessage/ApiErrorMessage';
import {useAuthContext} from '../../contexts/AuthContext';
import {useNavigation} from '@react-navigation/native';
import {Auth} from 'aws-amplify';
import styles from './styles';
import CustomInput, {IEditableUser} from './CustomInput';
import {DEFAULT_USER_IMAGE} from '../../config';
import {UsersByUsernameQuery, UsersByUsernameQueryVariables} from '../../API';

const EditProfileScreen = () => {
  const {userId, user: authUser} = useAuthContext();
  const navigation = useNavigation();

  const {data, error, loading} = useQuery<GetUserQuery, GetUserQueryVariables>(
    getUser,
    {variables: {id: userId}},
  );

  const [doUpdateUser, {error: updateError, loading: updateLoading}] =
    useMutation<UpdateUserMutation, UpdateUserMutationVariables>(updateUser);

  const [doDelete, {loading: deleteLoading, error: deleteError}] = useMutation<
    DeleteUserMutation,
    DeleteUserMutationVariables
  >(deleteUser);

  const user = data?.getUser;

  const [getUsersByUsername] = useLazyQuery<
    UsersByUsernameQuery,
    UsersByUsernameQueryVariables
  >(usersByUsername);

  const [selectedPhoto, setSelectedPhoto] = React.useState<Asset | null>(null);
  const {control, handleSubmit, setValue} = useForm<IEditableUser>();

  useEffect(() => {
    if (user) {
      setValue('name', user.name);
      setValue('username', user.username);
      setValue('website', user.website);
      setValue('bio', user.bio);
    }
  }, [user, setValue]);

  if (loading) {
    return (
      <View style={{paddingTop: 20}}>
        <ActivityIndicator />
      </View>
    );
  }

  if (error || updateError || deleteError || !user) {
    return (
      <ApiErrorMessage
        title="Error fetching user"
        message={
          error?.message ||
          updateError?.message ||
          deleteError?.message ||
          'Unknown error'
        }
      />
    );
  }

  const URL_REGEX =
    /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/i;

  const onSubmit = async (formData: IEditableUser) => {
    await doUpdateUser({
      variables: {input: {id: userId, ...formData, _version: user?._version}},
    });
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  const confirmDelete = () => {
    Alert.alert('Are you sure?', 'Deleting your user profile is permanent', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Yes, delete',
        style: 'destructive',
        onPress: startDeleting,
      },
    ]);
  };

  const startDeleting = async () => {
    if (!user) {
      return;
    }
    // delete from DB
    await doDelete({
      variables: {input: {id: userId, _version: user._version}},
    });

    // delete from Cognito
    authUser?.deleteUser(err => {
      if (err) {
        console.log(err);
      }
      Auth.signOut();
    });
  };

  const onChangePhoto = () => {
    launchImageLibrary(
      {mediaType: 'photo'},
      ({didCancel, errorCode, assets}) => {
        if (!didCancel && !errorCode && assets && assets.length > 0) {
          setSelectedPhoto(assets[0]);
        }
      },
    );
  };

  const validateUsername = async (username: string) => {
    try {
      const response = await getUsersByUsername({variables: {username}});
      if (response.error) {
        Alert.alert('Error fetching the username');
      }
      const users = response.data?.usersByUsername?.items;
      if (users && users.length > 0) {
        return 'Username is already taken';
      }
    } catch (err) {
      Alert.alert('Fail fetching the username');
    }
    return true;
  };

  return (
    <View style={styles.page}>
      <Image
        source={{uri: selectedPhoto?.uri || user?.image || DEFAULT_USER_IMAGE}}
        style={styles.avatar}
      />
      <Text onPress={onChangePhoto} style={styles.textButton}>
        Change profile photo
      </Text>
      <CustomInput
        name="name"
        label="Name"
        control={control}
        rules={{required: "Name can't be empty"}}
      />
      <CustomInput
        name="username"
        label="Username"
        control={control}
        rules={{
          required: "Username can't be empty",
          minLength: {
            value: 3,
            message: 'Username must be at least 3 characters',
          },
          validate: validateUsername,
        }}
      />
      <CustomInput
        name="website"
        label="Website"
        control={control}
        rules={{
          // required: "Website can't be empty",
          pattern: {value: URL_REGEX, message: 'Invalid URL'},
        }}
      />
      <CustomInput
        name="bio"
        label="Bio"
        multiline
        control={control}
        rules={{
          // required: "Bio can't be empty",
          maxLength: {
            value: 200,
            message: 'Bio must be at most 200 characters',
          },
        }}
      />

      <Text
        onPress={handleSubmit(onSubmit)}
        style={[styles.textButton, {paddingTop: 15}]}>
        {updateLoading ? 'Submitting...' : 'Submit'}
      </Text>

      <Text
        onPress={confirmDelete}
        style={[styles.textButtonDanger, {paddingTop: 5}]}>
        {deleteLoading ? 'Deleting...' : 'Delete User'}
      </Text>
    </View>
  );
};

export default EditProfileScreen;
