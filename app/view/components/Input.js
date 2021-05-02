import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

export const GlobalTextInput = ({
  style,
  error,
  touched,
  ...otherProps
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.InputContainer}>
        <TextInput
        {...otherProps}
          style={style}
          placeholderTextColor="#a6a6a6"
        />
      </View>
      <View style={styles.error}>
        {error && touched && <Text style={styles.errorText}>{error}</Text>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  InputContainer: {
    padding: 5,
  },
  errorText: {
    marginVertical: '1%',
    marginBottom: 5,
    color: '#EF4444',
    fontSize: 13,
  },
  error: {
    alignItems: 'center',
  },
});
