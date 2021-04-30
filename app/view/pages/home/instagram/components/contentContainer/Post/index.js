import React from 'react';
import {View, Dimensions, StyleSheet, Image, Text} from 'react-native';
import images from '../../../assets/images';
import colors from '../../../assets/colors';
import Icon from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const {width} = Dimensions.get('window');

const PostContainer = ({item}) => {
  return (
    <View>
      <Image
        source={images.images.pic1}
        resizeMode="center"
        style={styles.postImage}
      />
      <View style={styles.postBottomWrapper}>
        <View style={styles.postBottomLeftWrapper}>
          <View style={styles.postDetailContainers}>
            <FontAwesome
              style={styles.postDetailIcon}
              name="heart"
              size={24}
              color={colors.maroon}
            />
            <Text style={styles.postDetailNumbers}>
              {item.attractions.likes}
            </Text>
          </View>
          <View style={styles.postDetailContainers}>
            <FontAwesome
              style={styles.postDetailIcon}
              name="comment-o"
              size={24}
              color="black"
            />
            <Text style={styles.postDetailNumbers}>
              {item.attractions.comments}
            </Text>
          </View>
          <FontAwesome
            style={styles.postDetailIconPaper}
            name="paper-plane-o"
            size={20}
            color="black"
          />
          <Icon
            style={styles.bookMark}
            name="bookmark"
            size={24}
            color="black"
          />
        </View>
        <Text style={styles.desc}>{item.desc}</Text>
      </View>
    </View>
  );
};
export default PostContainer;

const styles = StyleSheet.create({
  postImage: {
    width: width - 32,
    height: 400,
    marginHorizontal: 8,
    borderRadius: 18,
  },
  postBottomWrapper: {
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    padding: 8,
  },
  postBottomLeftWrapper: {
    flexDirection: 'row',
  },
  postDetailContainers: {
    marginRight: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  postDetailIcon: {
    marginRight: 8,
  },
  postDetailIconPaper: {
    marginRight: 8,
    top: 3,
  },
  postDetailNumbers: {
    fontSize: 12,
  },
  desc: {
    fontSize: 13,
    textAlign: 'left',
    marginTop: 13,
  },
  bookMark: {
    marginStart: 200,
  },
});
