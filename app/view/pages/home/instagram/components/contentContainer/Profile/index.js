import React from 'react';
import {
  StyleSheet,
  View,Image,Text,TouchableOpacity 
} from 'react-native';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import images from '../../../assets/images';

const Profile = ({item}) => {
  const navigation = useNavigation(); 
  return (
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
          <Icon2
          style={styles.postMoreIcon}
          name="ellipsis-v"
          size={20}
          color="black"
        />
        </View>
    </View>
  );
};
export default Profile;

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
    marginStart: 220
  },
});
