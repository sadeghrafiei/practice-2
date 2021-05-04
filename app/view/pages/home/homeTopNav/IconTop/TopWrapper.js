import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {logos} from 'assets/images/images/index';

const TopWrapper = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.topWrapper}>
      <View style={styles.topLeftWrapper} />
      <Image
        source={logos.instagramLogo}
        style={styles.instagramLogo}
        resizeMode="contain"
      />
      <View style={styles.topRightWrapper}>
        <FontAwesome
          style={styles.icons}
          name="plus-square-o"
          color="#7d7d7d"
          size={25}
          onPress={() => navigation.navigate('AddPost')}
        />
        <MaterialCommunityIcons
          style={styles.icons}
          name="heart-outline"
          color="#7d7d7d"
          size={26}
        />
        <FontAwesome
          style={styles.icons}
          name="comments-o"
          size={25}
          color="#7d7d7d"
        />
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
  topLeftWrapper: {},
  topRightWrapper: {
    flexDirection: 'row',
    margin: 5,
  },
  instagramLogo: {
    width: 100,
    height: 40,
    position: 'absolute',
    top: 0,
  },
  icons: {
    marginHorizontal: 10,
  },
});
