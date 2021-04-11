import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
} from 'react-native';
import Icon2 from 'react-native-vector-icons/FontAwesome';

const ProfileDetails = ({item}) => {
  return (
        <View style={styles.postAuthorWrapper}>
          <Image
            source={item.profile}
            resizeMode="cover"
            style={styles.postProfileImg}
          />
          <Text style={styles.postUsername}>{item.username}</Text>
          <Icon2
          style={styles.postMoreIcon}
          name="ellipsis-v"
          size={20}
          color="black"
        />
        </View>
  );
};
export default ProfileDetails

const styles = StyleSheet.create({
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
  },
});
