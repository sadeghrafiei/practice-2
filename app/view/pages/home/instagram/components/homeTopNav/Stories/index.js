import React from 'react';
import {StyleSheet, FlatList} from 'react-native';
import datas from './datas';
import StoriesStyle from './style';

const Stories = () => {
  const renderItem = item => (
    <StoriesStyle item={item} />
  );

  return (
    <FlatList
    data={datas}
    keyExtractor={item => item.username}
    renderItem={renderItem}
    style={styles.container}
    showsHorizontalScrollIndicator={false}
    />
  );
};
export default Stories

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: 16,
    paddingBottom: 8,
  },
});
