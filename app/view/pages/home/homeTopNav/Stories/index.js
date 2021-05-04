import React from 'react';
import {StyleSheet, ScrollView ,Image ,View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import colors from '../../../../../assets/images/colors';
import images from '../../../../../assets/images/images/index'

const datas = [
    {
      name: 'Bill Gates',
      source: images.profile.profileSadegh,
    },
    {
      name: 'Mark Zuckerberg',
      source: images.profile.profileMark,
    },
    {
      name: 'King Boy',
      source: images.profile.profileKing,
    },
    {
      name: 'Cristiano Ronaldo',
      source: images.profile.profileRonaldo,
    },
    {
      name: 'Steve Jobs',
      source: images.profile.profileSteve,
    },
  ];


const Stories = () => {
  const renderItem = item => (
    <LinearGradient
      colors={colors.gradients.primary}
      key={item.name}
      style={styles.itemContainer}>
      <View style={styles.itemImgWrapper}>
        <Image source={item.source} style={styles.itemImg} resizeMode="cover" />
      </View>
    </LinearGradient>
  );

  return (
    <ScrollView
    contentContainerStyle={styles.container}
    renderItem={renderItem}
    showsHorizontalScrollIndicator={false}
    horizontal>
    {datas.map(renderItem)}
  </ScrollView>
  );
};
export default Stories

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: 16,
    paddingBottom: 8,
  },
  itemContainer: {
    width: 65,
    height: 65,
    borderRadius: 32.5,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
    
  },
  itemImgWrapper: {
    width: 60,
    height: 60,
    borderRadius: 30,

  },
  itemImg: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
});
