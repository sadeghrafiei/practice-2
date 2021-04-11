import React from 'react';
import {StyleSheet, View, Image, ScrollView} from 'react-native';

let images = [
  require('../../../../../assets/images/images/pic_1.jpg'),
  require('../../../../../assets/images/images/pic_2.jpg'),
  require('../../../../../assets/images/images/pic_3.jpg'),
  require('../../../../../assets/images/images/pic_4.jpg'),
  require('../../../../../assets/images/images/pic_5.jpg'),
  require('../../../../../assets/images/images/pic_6.jpg'),
];

const RenderPost = () => {
  return images.map((image, index) => {
    return (
      <View key={index}>
        <Image style={styles.image} source={image} />
      </View>
    );
  });
};
const PostList = () => {
  return (
    <View style={styles.container}>
      <RenderPost />
    </View>
  );
};

export default PostList;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  image: {
    width: 136,
    height: 130,
  },
});
