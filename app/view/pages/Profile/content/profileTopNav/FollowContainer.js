import React from 'react';
import {View, StyleSheet, Text, Image, Dimensions} from 'react-native';
import images from '../../../../../assets/images/images';

const {width, height} = Dimensions.get('window');

const FollowContainer = () => {
  return (
    <View>
      <View style={styles.container}>
        <Image
          style={styles.profileImage}
          source={images.profile.profileSadegh}
        />
        <View style={styles.follow}>
          <View style={styles.followContainer}>
            <View style={styles.postCount}>
              <Text>1,417</Text>
              <Text>Post</Text>
            </View>
            <View style={styles.followersCount}>
              <Text>236K</Text>
              <Text>followers</Text>
            </View>
            <View style={styles.followingCount}>
              <Text>1,356</Text>
              <Text>following</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
export default FollowContainer;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: 'row',
  },
  profileImage: {
    width: width * 0.2,
    height: width * 0.2,
    borderRadius: width * 0.5,
    borderWidth: 1,
    marginRight: 10,
    top: 0,
    borderColor: 'red',
  },
  follow: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    top: 20,
  },
  followContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  postCount: {
    flex: 1,
    alignItems: 'center',
  },
  followersCount: {
    flex: 1,
    alignItems: 'center',
  },
  followingCount: {
    flex: 1,
    alignItems: 'center',
  },
});
