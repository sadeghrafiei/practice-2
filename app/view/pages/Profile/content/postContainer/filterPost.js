import React from 'react';
import {View, Text, Image, StyleSheet, TouchableHighlight ,TouchableOpacity} from 'react-native';
import images from '../../../../../assets/images/images';

const FilterPost = () => {
  return (
    <View>
      <View style={styles.image}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.button}>
          <Image style={styles.logo} source={images.logos.viewList} />
        </TouchableOpacity>
        <TouchableOpacity  activeOpacity={0.6}>
          <Image style={styles.logo} source={images.logos.igtv} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.logo} source={images.logos.tag} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FilterPost;

const styles = StyleSheet.create({
  image: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  logo: {
    height: 30,
    width: 30,
    padding: 5,
    margin: 5,
  },
  button: {},
});
