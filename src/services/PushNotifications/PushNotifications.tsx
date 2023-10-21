import {useEffect, useState} from 'react';
import messaging, {
  FirebaseMessagingTypes,
} from '@react-native-firebase/messaging';
import {useNavigation} from '@react-navigation/native';

// Register background handler
messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Message handled in the background!', remoteMessage);
});

const PushNotifications = () => {
  const [enabled, setEnabled] = useState(false);
  const [token, setToken] = useState<string | undefined>();

  const navigation = useNavigation();

  useEffect(() => {
    async function requestUserPermission() {
      const authStatus = await messaging().requestPermission();
      const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

      if (enabled) {
        console.log('Authorization status:', authStatus);
        setEnabled(true);
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

  console.log('Token: ', token);
  return null;
};

export default PushNotifications;
