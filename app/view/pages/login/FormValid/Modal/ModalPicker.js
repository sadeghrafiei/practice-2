import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const OPTION = ['IR+98','Afghanistan+93' ,' Islands+358' , 'Albania+355' , 'Austria+43' , 'Belgium	+32','Afghanistan+93' ,' Islands+358' , 'Albania+355' , 'Austria+43' , 'Belgium	+32','IR+98','Afghanistan+93' ,' Islands+358' , 'Albania+355' , 'Austria+43' , 'Belgium	+32','Afghanistan+93' ,' Islands+358' , 'Albania+355' , 'Austria+43' , 'Belgium	+32']


const ModalPicker = ({changeModalVisible , setData}) => {

    const onPressItem = (option) => {
        changeModalVisible(false)
        setData(option)
    }

    const option = OPTION.map((item, index)=> {
        return (
            <TouchableOpacity 
            style={styles.option} 
            key={index} 
            onPress={() => onPressItem(item)}>
            <Text style={styles.text}>
                {item}
            </Text>
            </TouchableOpacity>
        )
    })
    return (
        <TouchableOpacity 
        onPress={() => changeModalVisible(false)}
        style={styles.container}
        >
            <View style={styles.modal}>
                <ScrollView>
                    {option}
                </ScrollView>
            </View>
        </TouchableOpacity>
    )
}

export default ModalPicker;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
        top: 30,
        left: 70
    },
    modal: {
        backgroundColor: 'black',
        borderRadius: 10,
        height: 500,
        width: 250
    },
    option: {
        alignItems: 'flex-start'
    },
    text: {
        margin: 20,
        fontSize: 12,
        fontWeight: 'bold',
        color: 'white'
    }
})