import React from 'react'
import { View , TouchableOpacity , Image , Dimensions , StyleSheet } from 'react-native'

const windowWidth = Dimensions.get('window').width;

const IgtvItem = ({item}) => (
    <View>
      <TouchableOpacity
        style={styles.container}>
        <Image
          style={styles.image}
          source={item.imageSource}
        />
      </TouchableOpacity>
    </View>
  );

  export default IgtvItem;

  const styles = StyleSheet.create({
      container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,
        marginVertical: 4,
      },
      image: {
        width: (windowWidth - 20) /2,
        height: (windowWidth - 20) / 2 + 80,
        borderRadius: 20,
      }
  })