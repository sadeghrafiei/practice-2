import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../../assets/colors';

const StoriesStyle = ({item}) => {
  return (
    <LinearGradient
      colors={colors.gradients.primary}
      key={item.name}
      style={styles.itemContainer}>
      <View style={styles.itemImgWrapper}>
        <Image source={item.source} style={styles.itemImg} resizeMode="cover" />
      </View>
    </LinearGradient>
  );
};
export default StoriesStyle;

const styles = StyleSheet.create({
  itemContainer: {
    width: 65,
    height: 65,
    borderRadius: 32.5,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
    
  },
  itemImgWrapper: {
    width: 60,
    height: 60,
    borderRadius: 30,

  },
  itemImg: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
});
