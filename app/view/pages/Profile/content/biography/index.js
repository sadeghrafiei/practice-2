import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import SubBio from './SubBiography';

const Biography = () => {
  return (
    <>
    <View style={styles.container}>
      <Text style={styles.name}>Sadegh Rafiei</Text>
      <Text style={styles.subName}>App Page</Text>
      <Text style={styles.text}>plan, schedule & analyze your social media posts 🌩️ </Text>
      <Text style={styles.text}>Tap into all our free resources🔹 </Text>
      <Text style={styles.text}>create a forever free account today 👇</Text>
      <Text style={styles.website}>www.sadeghrafiei.com</Text>
      <Text style={styles.text}>
        Followed by{' '}
        <Text style={styles.followed}>
          mmd_jafari , alisoltani and 28 others
        </Text>
      </Text>
      <SubBio />
      
    </View>
    </>
  );
};

export default Biography;

const styles = StyleSheet.create({
  container: {
    left: 15,
  },
  name: {
    fontWeight: 'bold',
    padding: 2,
  },
  subName: {
    fontWeight: 'normal',
    color: 'gray',
    fontSize: 12,
    padding: 2,
  },
  website: {
    color: '#349feb',
    padding: 2,
    fontSize: 12
  },
  followed: {
    fontWeight: 'bold',
    padding: 2,
  },
  text: {
      fontSize: 12
  }
});
