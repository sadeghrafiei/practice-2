import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
} from 'react-native';

const {width} = Dimensions.get('window');


const PostList = ({item}) => {
  return (
      <Image source={item.image} resizeMode="center" style={styles.postImage} />
    
  );
};
export default PostList

const styles = StyleSheet.create({
  postImage: {
    width: width - 32,
    height: 400,
    marginHorizontal: 8,
    borderRadius: 18,
  },
});
