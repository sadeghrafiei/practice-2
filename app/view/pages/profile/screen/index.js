import React from 'react';

import {StyleSheet, View, ScrollView} from 'react-native';

import Biography from '../content/biography';
import UserScreen from '../content/postContainer';
import ProfileTopNav from '../content/profileTopNav/index';
import BottomTabBar from '../content/bottomNavigation/index';
import { TopTab } from "../../../../routes/main";

const ProfileScreen = () => {
  return (
    <View>
      <ScrollView style={styles.container}>
        <View style={styles.view}>
          <View>
            <ProfileTopNav />
            <Biography />
            <TopTab />
            {/* <UserScreen /> */}
            {/* <BottomTabBar /> */}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default ProfileScreen;
const styles = StyleSheet.create({
  container: {
    padding: 1,
  },
  view: {
    flex: 1,
  },
});
