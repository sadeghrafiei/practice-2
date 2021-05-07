import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  ActivityIndicator,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  useInfiniteQuery,
  useMutation,
  useQueryClient,
} from 'react-query';
import Moment from 'moment';

import gate from 'gate';
import images from 'assets/images/images';

import Comment from './Comment';


 let LIMIT = 20
const CommentsScreen = ({route}) => {
  const [comments, setComments] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [addComment, setAddComment] = useState('');

  const {postComment} = route.params;
  
  const queryClient = useQueryClient();

  const refresh = () => {
    queryClient.invalidateQueries(['comments', postComment.id]);
    isRefreshing && setIsRefreshing(false);
  };

  const {
    data,
    fetchNextPage,
    isFetchingNextPage,
    isFetching,
  } = useInfiniteQuery(
    ['comments',postComment.id],
    async ({pageParam = 1}) => {
      const res = await gate.getComment({
        post_id: postComment.id,
        page: pageParam,
        limit: LIMIT,
      });
      return res.data;
    },
    {
      getNextPageParam: (lastPage, allPages) => {
        return lastPage?.length === LIMIT ? allPages.length + 1 : false;
      },
    },
  );


  const {mutate} = useMutation(gate.postComment, {
    onSuccess: (data) => {
      setComments([data?.data]);
    },
  });
    let flatlistData = [];
    comments
      ? (flatlistData = data?.pages?.flat())
      : [...comments, ...data?.pages?.flat()];
   

  const renderItem = ({item}) => <Comment item={item} />;
  return (
    <View style={styles.container}>
      <FlatList
        data={flatlistData}
        renderItem={renderItem}
        keyExtractor={(item) => item._id.toString()}
        ListHeaderComponent={
          <View style={styles.desc}>
            <View style={styles.View}>
              <Image
                source={images.profile.profileSadegh}
                style={styles.userPostedImage}
              />
              <View style={styles.descTextContainer}>
                <Text style={styles.username}>{postComment.username}</Text>
              </View>
            </View>
            <Text style={styles.descText}>{postComment.desc}</Text>
            <Text style={styles.dateOfPost}>
              {Moment(postComment.posted_time).format('MMM d YY')}
            </Text>
          </View>
        }
        ListFooterComponent={
          isFetching && (
            <ActivityIndicator
              color="black"
              style={styles.footerFlatList}
              size={30}
            />
          )
        }
        onEndReached={() => {
          if (!isFetchingNextPage) {
            fetchNextPage();
          }
        }}
        refreshing={isRefreshing}
        onEndReachedThreshold={1}
        onRefresh={() => refresh()}
        initialNumToRender={5}
      />
      <View style={styles.newCommentContainer}>
        <Image
          source={images.profile.profileSadegh}
          style={styles.userAddCommentImage}
        />
        <TextInput
          autoFocus
          style={styles.newCommentTextInput}
          placeholder="Write a comment..."
          value={addComment}
          onChangeText={setAddComment}
        />
        <TouchableOpacity
          style={styles.addCommentContainerButton}
          disabled={!addComment}
          onPress={() => {
            mutate({post_id: postComment.id, content: addComment}),
              setAddComment('');
          }}>
          <Text
            style={[
              styles.addCommnetTitle,
              {
                color: addComment == '' ? '#93C5FD' : '#3B82F6',
              },
            ]}>
            post
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CommentsScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  newCommentTextInput: {
    width: '70%',
  },
  newCommentContainer: {
    backgroundColor: '#FFF',
    borderTopColor: '#eee',
    borderTopWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 50,
    width: '100%',
  },
  footerFlatList: {
    marginVertical: 15,
  },
  addCommentContainerButton: {
    height: '100%',
    justifyContent: 'center',
    padding: 8,
    marginRight: 15,
  },
  addCommnetTitle: {
    alignSelf: 'center',
    textAlign: 'center',
  },
  View: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  desc: {
    flexDirection: 'column',
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  userPostedImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    alignSelf: 'flex-start',
    margin: 10,
    marginLeft: 15,
  },
  userAddCommentImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    alignSelf: 'center',
    margin: 5,
    marginLeft: 15,
  },
  dateOfPost: {
    color: '#919191',
    fontSize: 12,
    marginTop: 10,
    left: 10,
  },
  descTextContainer: {
    width: '86%',
    margin: 10,
  },
  descText: {
    fontSize: 14,
    fontWeight: 'normal',
    left: 10,
  },
  username: {
    fontWeight: 'bold',
    padding: 6,
  },
});
