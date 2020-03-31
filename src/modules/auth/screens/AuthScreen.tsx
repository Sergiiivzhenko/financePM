import React from "react";
import {View, StyleSheet} from "react-native";
import {Container, Button, Text, Item, Input, Label} from 'native-base';
import {connect} from 'react-redux';
import {Colors} from "../../../constants/Colors";
import {login as loginAction} from "../redux/authActions";

const AuthScreenComponent = ({navigation, loggedIn, login}) => {
    if (loggedIn) {
        navigation.navigate('Protected');
    }
    const onPress = () => {
        if (!loggedIn) {
            login();
        }
    };
    return (
        <Container style={styles.container}>
            <View style={styles.margin}>
                <Item style={styles.marginBottom} floatingLabel>
                    <Label style={styles.padding}>Username</Label>
                    <Input style={styles.padding}/>
                </Item>
                <Item style={styles.marginBottom} floatingLabel>
                    <Label style={styles.padding}>Password</Label>
                    <Input style={styles.padding}/>
                </Item>
            </View>
            <Button style={[styles.button, styles.margin]} onPress={onPress}>
                <Text>Login</Text>
            </Button>
        </Container>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
    },
    button: {
        justifyContent: 'center',
        marginLeft: 20,
        paddingVertical: 30,
        backgroundColor: Colors.blue,
    },
    marginBottom: {
        marginBottom: 10,
    },
    margin: {
        marginHorizontal: 15,
    },
    padding: {
        paddingHorizontal: 20,
    }
});

const mapStateToProps = (state) => {
    return {
        loggedIn: state.authReducer.loggedIn,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        login: () => dispatch(loginAction()),
    };
};

export const AuthScreen = connect(mapStateToProps, mapDispatchToProps)(AuthScreenComponent);