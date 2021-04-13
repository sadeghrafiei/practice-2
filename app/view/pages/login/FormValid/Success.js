import React from 'react'
import { View, Text ,StyleSheet} from 'react-native'

export default function Success({success}) {
    return (
        <View style={styles.container}>
            <Text style={styles.success}>{success}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent:'center',
        alignItems:'center'
    },
    error: {
        color:'#f72828' ,
        fontWeight: 'bold'
    },
    success: {
        color: 'green'
    }
})