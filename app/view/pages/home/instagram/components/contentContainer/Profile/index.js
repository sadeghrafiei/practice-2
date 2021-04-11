import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import ProfileDetails from './ProfileDetails';

const Profile = ({item}) => {
  return (
    <View style={styles.postTopWrapper}>
        <ProfileDetails item={item}/>
    </View>
  );
};
export default Profile;

const styles = StyleSheet.create({
  postTopWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
