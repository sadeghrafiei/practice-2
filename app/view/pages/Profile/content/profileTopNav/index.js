import React from 'react';
import {StyleSheet, View} from 'react-native';
import ProfileCenter from '../biography';
import FollowContainer from './FollowContainer';
import TopWrapper from './TopNav';

const ProfileTopNav = () => {
  return (
    <View style={styles.container}>
      <TopWrapper />
      <FollowContainer />
    </View>
  );
};
export default ProfileTopNav;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    backgroundColor: 'white',
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
});
