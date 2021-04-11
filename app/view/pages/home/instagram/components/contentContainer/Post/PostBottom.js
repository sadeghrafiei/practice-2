import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import colors from '../../../assets/colors';
import Icon from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/FontAwesome';

const PostBottomWrapper = ({item}) => {   
  return (
    <View style={styles.postBottomWrapper}>
        <View style={styles.postBottomLeftWrapper}>
          <View style={styles.postDetailContainers}>
            <Icon2
              style={styles.postDetailIcon}
              name="heart"
              size={24}
              color={colors.maroon}
            />
            <Text style={styles.postDetailNumbers}>{item.likes}</Text>
          </View>
          <View style={styles.postDetailContainers}>
            <Icon2
              style={styles.postDetailIcon}
              name="comment-o"
              size={24}
              color="black"
            />
            <Text style={styles.postDetailNumbers}>{item.comments}</Text>
            
          </View>
          <Icon2
              style={styles.postDetailIcon}
              name="paper-plane-o"
              size={20}
              color="black"
            />
        </View>
        <Icon name="bookmark" size={24} color="black" />
      </View>
  );
};
export default PostBottomWrapper;

const styles = StyleSheet.create({
  postBottomWrapper: {
    flexDirection: 'row',
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
  postDetailNumbers: {
    fontSize: 12,
  },
});
