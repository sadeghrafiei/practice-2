import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import HomeTopNav from '../components/homeTopNav/index';
import colors from '../assets/colors';
import ContentContainer from '../components/contentContainer/index';
import TabNavigation from '../components/bottomNavigation/index';

const Home = () => {
  return (
    <View style={styles.container}>
      <HomeTopNav />
      <ContentContainer />
      <TabNavigation />
    </View>
  );
};
export default Home
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.background.lightGray,
    
  },
});
