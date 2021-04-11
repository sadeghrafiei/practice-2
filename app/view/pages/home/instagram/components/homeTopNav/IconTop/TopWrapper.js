import React from 'react';
import {
  StyleSheet,
  View,
  Image,
} from 'react-native';
import images from '../../../assets/images';
import Icon from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/FontAwesome';


 const TopWrapper = () => {
  return (
      <View style={styles.topWrapper}>
        <View style={styles.topLeftWrapper} />
        <Image
          source={images.logos.instagramLogo}
          style={styles.instagramLogo}
          resizeMode="contain"
        />
        <View style={styles.topRightWrapper}>
          <Icon2 style={styles.icons} name="plus-square-o" size={23} />
          <Icon style={styles.icons} name="heart" size={24} color="black" />
          <Icon2
            style={styles.icons}
            name="comments-o"
            size={24}
            color="black"
          />
        </View>
      </View>
  );
};
export default TopWrapper
const styles = StyleSheet.create({
  topWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
  },
  topLeftWrapper: {},
  topRightWrapper: {
    flexDirection: 'row',
  },
  instagramLogo: {
    width: 100,
    height: 40,
    position: 'absolute',
    top: 0,
  },
  icons: {
    marginHorizontal: 10,
    top: 5,
  },
});
