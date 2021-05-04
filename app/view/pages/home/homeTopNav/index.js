import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import Stories from './Stories/index';
import TopWrapper from './IconTop/TopWrapper';


 const HomeTopNav = () => {
  return (
    <View style={styles.container}>
      <TopWrapper />
      <Stories />
    </View>
  );
};
export default HomeTopNav
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
