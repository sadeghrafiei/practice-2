import React from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;

const PostItem = ({item}) => (
  <View>
    <TouchableOpacity style={styles.container}>
      <Image style={styles.image} source={item.imageSource} />
    </TouchableOpacity>
  </View>
);
export default PostItem;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 1,
  },
  image: {
    width: (windowWidth - 2) / 3,
    height: (windowWidth - 2) / 3,
  },
});
