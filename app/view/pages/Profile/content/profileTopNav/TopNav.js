import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import images from '../../../../../assets/images/images/index';

const TopWrapper = () => {
  return (
    <View style={styles.topWrapper}>
      <Image
        source={images.logos.back}
        style={styles.back}
        resizeMode="contain"
      />
      <View style={styles.TopCenterWrapper}>
      <Text style={styles.username}>sadeghrafiei</Text>
      </View>
      <View style={styles.TopRigthWrapper}>
        <Image style={styles.more} source={images.logos.more} />
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
    top: 5,
  },
username:{
  fontSize:18
},
TopCenterWrapper: {
  justifyContent: 'center',
  alignItems: 'center',
  top: 10,
  left:160
},
more: {
  width: 25,
  height: 7,
},
TopRigthWrapper: {
  right: 11,
  bottom: 0,
  position: 'absolute',
}
});
