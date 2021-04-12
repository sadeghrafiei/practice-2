import React from 'react';

import {StyleSheet, View, FlatList, ScrollView} from 'react-native';

import Biography from '../content/biography';
import UserScreen from '../content/postContainer';
import ProfileTopNav from '../content/profileTopNav/index';

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View  style={styles.view}>
        <View>
          <ProfileTopNav />
          <Biography />
          <UserScreen />
        </View>
      </View>
    </ScrollView>
  );
};
export default ProfileScreen;
const styles = StyleSheet.create({
  container: {
    padding: 1,
  },
  view: {
    flex: 1
  }
});
