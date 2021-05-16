import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Dispatch } from "redux";
import { connect } from "react-redux";

import {
    CounterState,
    incrementCounter,
    decrementCounter
} from "../store";

interface CounterProps {
    increment: () => void;
    decrement: () => void;
    count: any;
}

const Counter = ({ increment, decrement, count }: CounterProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.counter}>Counter:  {count.count}</Text>
            <TouchableOpacity style={styles.button} onPress={increment}><Text style={styles.text}>+</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={decrement}><Text style={styles.text}>-</Text></TouchableOpacity>
        </View>
    );
};

const mapStateToProps = (state: CounterState) => ({
    count: state.count
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    increment: () => dispatch(incrementCounter()),
    decrement: () => dispatch(decrementCounter())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    counter: {
        fontSize: 22,
        marginVertical: 20,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width: 50,
        backgroundColor: 'black',
        borderRadius: 25,
        margin: 8
    },
    text: {
        color: '#ffffff',
        fontSize: 25
    }
})