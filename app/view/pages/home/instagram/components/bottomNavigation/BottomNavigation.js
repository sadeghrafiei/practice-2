import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/FontAwesome';


const BottomNavigation = () => {
  return (
    <View>
      <View style={styles.sideWrapper}>
        <Icon style={styles.icons} name="home" size={25} color="black" />
        <Icon2 style={styles.icons} name="search" size={25} color="black" />
      </View>
      <View style={styles.sideWrapper}>
        <Icon style={styles.icons} name="suitcase" size={25} color="black" />
        <Icon style={styles.icons} name="user" size={25} color="black" />
      </View>

      <View style={styles.addButtonContainer}>
          <Icon name="video" size={25} color="black" />
      </View>
      </View>
  );
};
export default BottomNavigation

const styles = StyleSheet.create({
  sideWrapper: {
    flexDirection: 'row',
  },
  icons: {
    marginHorizontal: 24,
  },
  addButtonContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 56,
    height: 46,
  },
  addButton: {
    borderRadius: 28,
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
