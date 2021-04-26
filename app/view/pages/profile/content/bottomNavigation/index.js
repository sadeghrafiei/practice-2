import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {logos} from '../../../../../assets/images/images/index';

import { useNavigation } from '@react-navigation/native';

const TabNavigation = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.bottomTabBarContainer}>
      <View style={styles.icon}>
        <TouchableOpacity style={styles.bottomTabBarIconHome} onPress={() => {navigation.navigate('Home')}}>
          <Image style={styles.bottomTabBarIcon} source={logos.Home} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomTabBarIconSearch}>
          <Image style={styles.bottomTabBarIcon} source={logos.search} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomTabBarIconPlus}>
          <Image style={styles.bottomTabBarIcon} source={logos.plus} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomTabBarIconLike}>
          <Image style={styles.bottomTabBarIcon} source={logos.like} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomTabBarIconUser} onPress={() => {navigation.navigate('UserAccount')}}>
          <Image style={styles.bottomTabBarIcon} source={logos.user} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({
  bottomTabBarContainer: {
    height: 50,
    borderTopColor: '#eee',
    borderTopWidth: 0.7,
    justifyContent: 'space-around',
  },
  bottomTabBarIcon: {
    width: 35,
    height: 35,
  },
  bottomTabBarIconHome: {
    width: 25,
    height: 25,
    padding: 5,
    right: 109,
    bottom: 4
  },
  bottomTabBarIconSearch: {
    width: 25,
    height: 25,
    padding: 5,
    right: 60
  },
  bottomTabBarIconPlus: {
    width: 25,
    height: 25,
    alignSelf: 'center',
    padding: 5,
    bottom:8
  },
  bottomTabBarIconLike: {
    width: 25,
    height: 25,
    alignSelf: 'center',
    padding: 5,
    left: 60,
    bottom: 8
  },
  bottomTabBarIconUser: {
    width: 35,
    height: 35,
    alignSelf: 'center',
    padding: 5,
    left: 100
  },
  icon: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
});
