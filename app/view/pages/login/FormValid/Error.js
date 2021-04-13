import React from 'react'
import { View, Text ,StyleSheet} from 'react-native'

export default function Error({error}) {
    return (
        <View style={styles.container}>
            <Text style={styles.error}>{error}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    },
    error: {
        color:'#f72828' ,
        fontWeight: 'bold'
    },
})