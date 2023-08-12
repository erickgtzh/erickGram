import {View, Text, Image} from 'react-native';
import Button from '../../components/Button/Button';
import styles from './styles';
import user from '../../assets/data/user.json';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Auth} from 'aws-amplify';

const ProfileHeader = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.root}>
      <View style={styles.headerRow}>
        {/* Profile image */}
        <Image source={{uri: user.image}} style={styles.avatar} />

        {/* Post */}
        <View style={styles.detailsContainer}>
          <View style={styles.numberContainer}>
            <Text style={styles.numberText}>97</Text>
            <Text style={styles.textDetail}>Posts</Text>
          </View>
          <View style={styles.numberContainer}>
            <Text style={styles.numberText}>97</Text>
            <Text style={styles.textDetail}>Posts</Text>
          </View>
          <View style={styles.numberContainer}>
            <Text style={styles.numberText}>97</Text>
            <Text style={styles.textDetail}>Posts</Text>
          </View>
        </View>
      </View>

      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.bio}>{user.bio}</Text>

      <View style={styles.buttons}>
        <Button
          text="Edit Profile"
          onPress={() => navigation.navigate('Edit Profile')}
          inline
        />

        <Button
          text="Sign Out"
          onPress={() => {
            Auth.signOut();
          }}
          style={{marginLeft: 10}}
          inline
        />
      </View>
    </View>
  );
};

export default ProfileHeader;
