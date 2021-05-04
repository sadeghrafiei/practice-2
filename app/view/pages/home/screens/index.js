import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import HomeTopNav from '../homeTopNav/index';
import ContentContainer from '../contentContainer/index';

const Home = () => {
  return (
    <View style={styles.container}>
      <HomeTopNav />
      <ContentContainer  />
      {/* <TabNavigation /> */}
    </View>
  );
};
export default Home
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    
  },
});
