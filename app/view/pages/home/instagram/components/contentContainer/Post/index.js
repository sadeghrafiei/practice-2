import React from 'react';
import {
  View,
} from 'react-native';
import PostBottomWrapper from './PostBottom';
import PostList from './PostList';



const PostContainer = ({item}) => {
  return (
    <View>
      <PostList item={item} />
      <PostBottomWrapper item={item} />
    </View>
  );
};
export default PostContainer

