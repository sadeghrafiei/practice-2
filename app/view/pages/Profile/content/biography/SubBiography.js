import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
} from 'react-native';
import images from '../../../../../assets/images/images';
import StoryItem from './StoryItem';

const data = [
  {
    id: 1,
    image: images.logos.almas,
    title: 'Start here',
  },
  {
    id: 2,
    image: images.logos.fly,
    title: 'IG Stories',
  },
  {
    id: 3,
    image:images.logos.kingStorie,
    title: 'linkin.bio',
  },
  {
    id: 4,
    image:images.logos.tea,
    title: 'latest',
  },
  {
    id: 5,
    image:images.logos.light,
    title: 'Start here',
  },
  {
    id: 6,
    image:images.logos.fly,
    title: 'IG Stories',
  },
];
const SubBio = () => {
  return (
    <>
      <View style={styles.sectionFlatList}>
        <FlatList
          data={data}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => (
            <StoryItem image={item.image} title={item.title} />
          )}
        />
      </View>
    </>
  );
};

export default SubBio;

const styles = StyleSheet.create({
  sectionFlatList: {
    height: 170,
  },
});
