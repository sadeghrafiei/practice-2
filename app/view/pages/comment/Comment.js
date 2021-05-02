import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Moment from 'moment';

import images from 'assets/images/images';

const Comment = ({item}) => {
  return (
    <View style={styles.container}>
      <Image source={images.profile.profileKing} style={styles.Image} />
      <View style={styles.textContainer}>
        <Text style={styles.username}>
          sadeghrafiei
          <Text style={styles.commentText}>
            {'  '}
            {item.content}
          </Text>
        </Text>
        <Text style={styles.dateAndReply}>
          {' '}
          {Moment(item.created_at).format('MMM DD')}
          <Text style={styles.reply}> {'     '}Reply</Text>
        </Text>
      </View>
      <Ionicons name="heart-outline" style={styles.Icon} size={13} />
    </View>
  );
};

export default Comment;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 15,
    alignItems: 'center',
    marginBottom: 10,
  },
  Image: {
    width: 30,
    height: 30,
    borderRadius: 15,
    alignSelf: 'center',
  },
  Icon: {
    marginHorizontal: 39,
  },
  reply: {
    color: '#919191',
    marginHorizontal: 15,
  },
  textContainer: {
    width: '75%',
  },
  username: {
    fontWeight: 'bold',
    marginHorizontal: 13,
  },
  commentText: {
    fontWeight: 'normal',
  },
  dateAndReply: {
    fontSize: 12,
    color: '#ccc',
    marginVertical: 5,
    marginHorizontal: 10,
  },
});
