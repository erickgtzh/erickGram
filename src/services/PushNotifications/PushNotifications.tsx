import {useEffect, useState} from 'react';
import messaging, {
  FirebaseMessagingTypes,
} from '@react-native-firebase/messaging';
import {useNavigation} from '@react-navigation/native';
import {useMutation, useQuery} from '@apollo/client';
import {getUser, updateUser} from './queries';
import {useAuthContext} from '../../contexts/AuthContext';
import {
  GetUserQuery,
  GetUserQueryVariables,
  UpdateUserMutation,
  UpdateUserMutationVariables,
} from '../../API';

// Register background handler
messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Message handled in the background!', remoteMessage);
});

const PushNotifications = () => {
  const {userId} = useAuthContext();
  const [enabled, setEnabled] = useState(false);
  const [token, setToken] = useState<string | undefined>();

  const navigation = useNavigation();

  const {data} = useQuery<GetUserQuery, GetUserQueryVariables>(getUser, {
    variables: {
      id: userId,
    },
  });

  const [doUpdateUser] = useMutation<
    UpdateUserMutation,
    UpdateUserMutationVariables
  >(updateUser);

  useEffect(() => {
    async function requestUserPermission() {
      const authStatus = await messaging().requestPermission();
      const newEnabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

      if (newEnabled) {
        setEnabled(newEnabled);
        await getDeviceToken();
      }
    }

    requestUserPermission();
  }, []);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    messaging().onMessage(handleNotification);

    messaging().onNotificationOpenedApp(handleNotification);

    messaging().getInitialNotification().then(handleNotification);
  }, [enabled]);

  useEffect(() => {
    if (!token || !data?.getUser?.id) {
      return;
    }

    const user = data.getUser;
    doUpdateUser({
      variables: {
        input: {
          id: user.id,
          _version: user._version,
          fcmToken: token,
        },
      },
    });
  }, [token, data?.getUser?.id]);

  const handleNotification = (
    remoteMessage?: FirebaseMessagingTypes.RemoteMessage | null,
  ) => {
    if (!remoteMessage) {
      return;
    }

    if (remoteMessage.data?.postId) {
      navigation.navigate('Post', {id: remoteMessage.data?.postId});
    }
  };

  const getDeviceToken = async () => {
    await messaging().registerDeviceForRemoteMessages();
    const newToken = await messaging().getToken();
    setToken(newToken);
  };

  return null;
};

export default PushNotifications;
