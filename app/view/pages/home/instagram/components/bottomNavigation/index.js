import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

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
    width: '100%',
    position: 'absolute',
    height: 65,
    bottom: 0,
    backgroundColor: 'white',
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: {
      height: 2,
      width: 2,
    },
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
