import React, {useState} from 'react';
import {StyleSheet, FlatList, View, ActivityIndicator} from 'react-native';
import {useInfiniteQuery, useQueryClient} from 'react-query';

import gate from 'gate';

import PostContainer from './Post';

const ContentContainer = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const {data, fetchNextPage, isFetchingNextPage} = useInfiniteQuery(
    'posts',
    async ({pageParam = 1}) => {
      const res = await gate.getPosts(pageParam, 5);
      return res.data;
    },
    {
      getNextPageParam: (lastPage, allPages) => {
        return lastPage?.length === 5 ? allPages?.length + 1 : false;
      },
    },
  );
  console.log(data);

  const queryClient = useQueryClient();
  
  const refresh = () => {
    queryClient.invalidateQueries(['posts']);
    isRefreshing && setIsRefreshing(false);
  };

  const flatListData = data?.pages?.flat();

  const renderItem = ({item}) => (
    <View style={styles.postContainer}>
      <PostContainer item={item} />
    </View>
  );
  return (
    <FlatList
      data={flatListData}
      onEndReached={() => {
        if (!isFetchingNextPage) {
          fetchNextPage();
        }
      }}
      ListFooterComponent={
        isFetchingNextPage && <ActivityIndicator size="large" color="black" />
      }
      onEndReachedThreshold={0.9}
      initialNumToRender={5}
      renderItem={renderItem}
      style={styles.container}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item?.id.toString()}
      refreshing={isRefreshing}
      onRefresh={() => refresh()}
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
    height: 540,
    marginVertical: 8,
    borderRadius: 18,
  },
});
