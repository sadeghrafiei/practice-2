import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import images from '../../../../../../assets/images/images'

export default function SplashScreen() {
    return (
        <View style={styles.Image}>
            <Image style={styles.splash} source={images.images.splash} />
        </View>
    )
}

const styles = StyleSheet.create({
    Image: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'
    },
    splash: {
        bottom: 20,
    }
})