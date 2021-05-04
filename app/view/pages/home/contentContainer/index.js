import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Dimensions,
  ActivityIndicator,
} from 'react-native';

import gate from 'gate';

import PostContainer from './Post/index';

const {width} = Dimensions.get('window');

const ContentContainer = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const fetcher = async () => {
    setIsLoading(true);
    try {
      const res = await gate.getPosts(page, 1);
      //console.log(res);
      setPosts([...posts, ...res.data]);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
      setPage(page+1)
    }
  };
  useEffect(() => {
    fetcher();
  }, [page]);

  const renderItem = ({item}) => (
    <View style={styles.postContainer}>
      <PostContainer item={item} />
    </View>
  );
  return (
    <FlatList
      data={posts}
      onEndReached={() => setPage(page + 1)}
      ListFooterComponent={
        isLoading ? <ActivityIndicator size="large" color="black" /> : null
      }
      onEndReachedThreshold={0.9}
      initialNumToRender={5}
      renderItem={renderItem}
      style={styles.container}
      showsVerticalScrollIndicator={false}
      keyExtractor = { (item, index) => index.toString() }
    />
  );
};
export default ContentContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  postContainer: {
    backgroundColor: 'white',
    width: width - 16,
    height: 540,
    marginVertical: 8,
    borderRadius: 18,
  },
});
