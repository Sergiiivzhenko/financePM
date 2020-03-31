import React from "react";
import {StyleSheet, View} from "react-native";
import {Button, Text} from "native-base";
import {connect} from 'react-redux';
import {
    increaseCounter as increaseCounterAction,
    decreaseCounter as decreaseCounterAction,
} from "../redux/balanceActions";

const HomeScreenComponent = ({counter, increaseCounter, decreaseCounter}) => (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Button style={styles.button} onPress={increaseCounter}>
            <Text>+</Text>
        </Button>
        <Button style={styles.button} onPress={decreaseCounter}>
            <Text>-</Text>
        </Button>
        <Text>{`Counter: ${counter}`}</Text>
    </View>
);

const styles = StyleSheet.create({
    button: {
        width: 100,
        marginTop: 10,
        justifyContent: 'center'
    }
});

const mapStateToProps = (state) => {
    return {
        counter: state.balanceReducer.counter,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        increaseCounter: () => dispatch(increaseCounterAction()),
        decreaseCounter: () => dispatch(decreaseCounterAction()),
    };
};

export const HomeScreen = connect(mapStateToProps, mapDispatchToProps)(HomeScreenComponent);