import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import Profile from './Profile/index';
import PostContainer from './Post/index';
import gate from 'gate';

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
    }
  };
  useEffect(() => {
    fetcher();
  }, [page]);

  const renderItem = ({item}) => (
    <View style={styles.postContainer}>
      <Profile item={item} />
      <PostContainer item={item} />
    </View>
  );
  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => {
        item.id.toString();
      }}
      onEndReached={() => setPage(page + 1)}
      ListHeaderComponent={
        isLoading ? <ActivityIndicator size="large" color="black" /> : null
      }
      ListHeaderComponentStyle={styles.listHeader}
      onEndReachedThreshold={0.5}
      initialNumToRender={5}
      renderItem={renderItem}
      /* ListFooterComponent={
        isLoading ? <ActivityIndicator size="large" color="black" /> : null
      }
      ListFooterComponentStyle={styles.footer} */
      style={styles.container}
      showsVerticalScrollIndicator={false}
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
    marginVertical: 8,
    borderRadius: 18,
  },
  listHeader: {
    alignItems: 'center',
  },
  footer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
