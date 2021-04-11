import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const BottomNavigation = () => {
  return (
    <View style={styles.container}>
      <View style={styles.sideWrapper}>
        <Icon style={styles.icons} name="home" size={25} color="black" />
        <FontAwesome style={styles.icons} name="search" size={25} color="black" />
        <FontAwesome style={styles.icons} name="plus-square-o" size={25} color="black" />
        <FontAwesome style={styles.icons} name="heart" size={25} color="black" />
        <FontAwesome style={styles.icons} name="user-circle" size={25} color="black" />
      </View>
    </View>
  );
};
export default BottomNavigation;

const styles = StyleSheet.create({
  container: {
  },
  sideWrapper: {
    flexDirection: 'row',
    justifyContent: "space-around",
  },
  icons: {
    marginHorizontal: 24,
  },
  addButtonContainer: {
    bottom: 0,
    right: 0,
    width: 56,
    height: 46,
    top: 209,
  },
  addButton: {
    borderRadius: 28,
    width: 56,
    height: 56,
 
  },
});
