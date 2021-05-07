import React from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import images from 'assets/images/images';
import colors from 'assets/images/colors';

const {width} = Dimensions.get('window');

const PostContainer = ({item}) => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.postTopWrapper}>
        <View style={styles.postAuthorWrapper}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('UserAccountStack');
            }}>
            <Image
              source={images.profile.profileSadegh}
              resizeMode="cover"
              style={styles.postProfileImg}
            />
          </TouchableOpacity>
          <Text style={styles.postUsername}>{item.username}</Text>
          <FontAwesome
            style={styles.postMoreIcon}
            name="ellipsis-v"
            size={20}
            color="black"
          />
        </View>
      </View>
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
              color="#7d7d7d"
              onPress={() => {
                navigation.navigate('Comments', {postComment: item});
                console.log('clicked');
              }}
            />
            <Text style={styles.postDetailNumbers}>
              {item.attractions.comments}
            </Text>
          </View>
          <FontAwesome
            style={styles.postDetailIconPaper}
            name="paper-plane-o"
            size={20}
            color="#7d7d7d"
          />
          <Ionicons
            style={styles.bookMark}
            name="bookmark-outline"
            color="#7d7d7d"
            size={24}
          />
        </View>
        <Text style={styles.desc}>{item.desc}</Text>
      </View>
    </View>
  );
};
export default PostContainer;

const styles = StyleSheet.create({
  postTopWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  postAuthorWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  postProfileImg: {
    width: 40,
    height: 40,
    borderRadius: 20,
    margin: 8,
  },
  postUsername: {
    fontWeight: '600',
  },
  postMoreIcon: {
    transform: [{rotate: '90deg'}],
    marginRight: 8,
    marginStart: 220,
  },
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
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 5,
  },
  input: {
    backgroundColor: '#f0f0f0',
    padding: 13,
    borderRadius: 8,
    width: '100%',
  },
  button: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    right: 38,
  },
});
