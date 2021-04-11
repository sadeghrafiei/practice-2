import React from 'react';
import {StyleSheet, View} from 'react-native';

import BottomNavigation from './BottomNavigation';

const TabNavigation = () => {
  return (
    <View style={styles.container}>
      <BottomNavigation />
    </View>
  );
};
export default TabNavigation;

const styles = StyleSheet.create({
  container: { 
  bottom: 0,
  backgroundColor: 'white',
  shadowColor: '#000000',
  shadowOpacity: 0.1,
  shadowRadius: 5,
  height: '40%',
  position: 'absolute',
  width: '100%',
  },
});
