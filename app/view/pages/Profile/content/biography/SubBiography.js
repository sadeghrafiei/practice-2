import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import images from '../../../../../assets/images/images';

const SubBio = () => {
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Following</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Message</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Email</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonIcon}>
          <Image style={styles.downIcon} source={images.logos.down} />
        </TouchableOpacity>
      </View>
      <View style={styles.itemImgWrapper}>
        <View>
          <Image style={styles.storeis} source={images.logos.almas} />
          <Text style={styles.subText}>Start here🗽</Text>
        </View>
        <View>
          <Image style={styles.storeis} source={images.logos.fly} />
          <Text style={styles.subText}>IG Storeis🌟</Text>
        </View>
        <View>
          <Image style={styles.storeis} source={images.logos.tea} />
          <Text style={styles.subText}>Linkin.bio🔗</Text>
        </View>
        <View>
          <Image style={styles.storeis} source={images.logos.kingStorie} />
          <Text style={styles.subText}>UGC👑</Text>
        </View>
        <View>
          <Image style={styles.storeis} source={images.logos.light} />
          <Text style={styles.subText}>Latest🌩️</Text>
        </View>
      </View>
    </>
  );
};

export default SubBio;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  button: {
    padding: 5,
    top: 10,
    width: 120,
    height: 10,
  },
  text: {
    borderWidth: 1,
    padding: 7,
    borderColor: 'gray',
    backgroundColor: '#fff',
    borderRadius: 5,
    textAlign: 'center',
  },
  downIcon: {
    height: 20,
    width: 20,
    top: 8,
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  buttonIcon: {
    padding: 5,
    top: 10,
  },
  storeis: {
    width: 50,
    height: 50,
    borderRadius: 32.5,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    borderColor: '#707070',
    borderWidth: 2,
  },
  itemImgWrapper: {
    top: 22,
    flexDirection: 'row',
    right: 8,
    justifyContent: 'center'
  },
  subText: {
    padding: 8,
    margin: 4,
    color: 'gray',
    fontSize: 12,
    bottom: 12,
    right: 5
  },
});
