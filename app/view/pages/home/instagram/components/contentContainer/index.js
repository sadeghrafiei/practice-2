import React from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Dimensions,
} from 'react-native';
import Profile from './Profile/index';
import datas from './datas';
import PostContainer from './Post/index';

const {width} = Dimensions.get('window');

const ContentContainer = () => {
  const renderItem = ({item}) => (
    <View style={styles.postContainer}>
      <Profile item={item} />
      <PostContainer item={item} />
    </View>
  );
  return (
    <FlatList
      data={datas}
      keyExtractor={item => item.username}
      renderItem={renderItem}
      style={styles.container}
      showsVerticalScrollIndicator={false}
    />
  );
};
export default ContentContainer

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  postContainer: {
    backgroundColor: 'white',
    width: width - 16,
    marginVertical: 8,
    borderRadius: 18,
  },
});
