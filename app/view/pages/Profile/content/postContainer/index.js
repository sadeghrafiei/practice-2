import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import FilterPost from './filterPost';
import PostList from './PostList';

const PostContainer = () => {
  return (
    <View style={styles.container}>
      <FilterPost />
      <PostList />
    </View>
  );
};

export default PostContainer;

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
});
