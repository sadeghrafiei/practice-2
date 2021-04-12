import React, {useState} from 'react';
import {
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';

import images from '../../../../../assets/images/images';

import BottomTabBar from '../bottomNavigation';
import IgtvItem from './IgtvItem';
import PostItem from './PostItem';

const windowWidth = Dimensions.get('window').width;

const DATA = {
  userPosts: [
    {
      id: 1,
      imageSource: require('../../../../../assets/images/images/pic_1.jpg'),
      type: 'igtv',
    },
    {
      id: 2,
      imageSource: require('../../../../../assets/images/images/pic_2.jpg'),
      type: 'igtv',
    },
    {
      id: 3,
      imageSource: require('../../../../../assets/images/images/pic_3.jpg'),
      type: 'igtv',
    },
    {
      id: 4,
      imageSource: require('../../../../../assets/images/images/pic_4.jpg'),
      type: 'posts',
    },
    {
      id: 5,
      imageSource: require('../../../../../assets/images/images/pic_5.jpg'),
      type: 'posts',
    },
    {
      id: 6,
      imageSource: require('../../../../../assets/images/images/pic_6.jpg'),
      type: 'taged',
    },
    {
      id: 7,
      imageSource: require('../../../../../assets/images/images/pic_1.jpg'),
      type: 'posts',
    },
  ],
};

const UserScreen = () => {
  const [postStatus, setPostStatus] = useState('posts');

  const renderPostItem = ({item}) => <PostItem item={item} />;
  const renderIgtvItem = ({item}) => <IgtvItem item={item} />;

  return (
    <View style={{flex: 1, backgroundColor: '#FFF'}}>
      <FlatList
        ListHeaderComponent={
          <>
            <View style={styles.tabBarContainer}>
              <TouchableOpacity
                style={{
                  width: (windowWidth - 2) / 3,
                  alignItems: 'center',
                  padding: 10,
                  borderBottomWidth: postStatus == 'taged' ? 2 : 0,
                  borderBottomColor: '#ccc',
                  marginHorizontal: 1,
                }}
                onPress={() => {
                  setPostStatus('taged');
                }}>
                <Image
                  source={images.logos.tag}
                  style={{width: 25, height: 25}}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  width: (windowWidth - 2) / 3,
                  alignItems: 'center',
                  padding: 10,
                  borderBottomWidth: postStatus == 'igtv' ? 2 : 0,
                  borderBottomColor: '#ccc',
                  marginHorizontal: 1,
                }}
                onPress={() => {
                  setPostStatus('igtv');
                }}>
                <Image
                  source={images.logos.igtv}
                  style={{width: 25, height: 25}}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: (windowWidth - 2) / 3,
                  alignItems: 'center',
                  padding: 10,
                  borderBottomWidth: postStatus == 'posts' ? 2 : 0,
                  borderBottomColor: '#ccc',
                  marginHorizontal: 1,
                }}
                onPress={() => {
                  setPostStatus('posts');
                }}>
                <Image
                  source={images.logos.viewList}
                  style={{width: 25, height: 25}}
                />
              </TouchableOpacity>
            </View>
          </>
        }
        contentContainerStyle={styles.contentContainerStyleFlatList}
        data={DATA.userPosts.filter((item) => item.type == postStatus)}
        renderItem={postStatus == 'igtv' ? renderIgtvItem : renderPostItem}
        key={postStatus == 'igtv' ? '_' : '#'}
        keyExtractor={(item) => (postStatus == 'igtv' ? '_' : '#' + item.id)}
        showsHorizontalScrollIndicator={false}
        numColumns={postStatus == 'igtv' ? 2 : 3}
      />
      <BottomTabBar />
    </View>
  );
};

export default UserScreen;

const styles = StyleSheet.create({
  contentContainerStyleFlatList: {
    paddingBottom: 10,
    borderTopWidth: 0.3,
    borderColor: '#eee',
  },
  contentContainerStyleFlatListStory: {
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: '#eee',
  },
  userImageContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    margin: 10,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopColor: '#F56040',
    borderLeftColor: '#F77737',
    borderBottomColor: '#FCAF45',
    borderRightColor: '#FCAF45',
    borderWidth: 2,
  },
  userImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  countName: {
    textAlign: 'center',
    fontSize: 12,
  },
  countNumber: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
  },
  tabBarContainer: {
    flexDirection: 'row-reverse',
    borderTopColor: '#eee',
    borderTopWidth: 1,
  },
  postsStyle: {},
});
