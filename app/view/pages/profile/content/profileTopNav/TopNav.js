import React from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
import {logos} from '../../../../../assets/images/images';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const TopWrapper = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.topWrapper}>
      <TouchableOpacity style={styles.backContainer}>
        <Image source={logos.back} style={styles.back} resizeMode="contain" />
      </TouchableOpacity>
      <View style={styles.TopCenterWrapper}>
        <Text style={styles.username}>sadeghrafiei</Text>
      </View>
      <View style={styles.TopRigthWrapper}>
        <TouchableOpacity>
          <MaterialCommunityIcons
            style={styles.more}
            color={'black'}
            name="segment"
            size={30}
            onPress={() => navigation.navigate('Archive')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default TopWrapper;
const styles = StyleSheet.create({
  topWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
  },
  topRightWrapper: {
    flexDirection: 'row',
  },
  back: {
    width: 100,
    height: 40,
    position: 'absolute',
  },
  username: {
    fontSize: 15,
    bottom: 10,
  },
  backContainer: {},
  TopCenterWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    top: 29,
    right: 150,
  },
  more: {
    top: 24,
    alignItems: 'center',
  },
  TopRigthWrapper: {
    right: 11,
    bottom: 0,
    position: 'absolute',
  },
});
