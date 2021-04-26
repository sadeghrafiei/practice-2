import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function Button({handleSubmit,isValid,values ,text}) {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          disabled={!isValid || values.password  === ''}
          onPress={handleSubmit}>
          <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 14
    },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    width: 280,
    height: 45,
    backgroundColor: '#4287f5',
    left: 19,
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    color: 'white',
  },
});
