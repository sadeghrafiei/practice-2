import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

const bottomTabs = [
    require('../../../../../assets/images/images/user.jpg'),
    require('../../../../../assets/images/images/like.png'),
    require('../../../../../assets/images/images/plus.png'),
    require('../../../../../assets/images/images/search.jpg'),
    require('../../../../../assets/images/images/Home.png'),
  ];
const BottomTabBar = () => {
  return (
    <View style={styles.bottomTabBarContainer}>
      {bottomTabs.map((image) => (
        <Image style={styles.bottomTabBarIcon} source={image} />
      ))}
    </View>
  );
};

export default BottomTabBar;

const styles = StyleSheet.create({
  bottomTabBarIcon: {
    width: 18,
    height: 18,
    alignSelf: 'center',
  },
  bottomTabBarContainer: {
    flexDirection: 'row-reverse',
    height: 50,
    justifyContent: 'space-around',
    borderTopColor: '#eee',
    borderTopWidth: 0.7,
  },
});