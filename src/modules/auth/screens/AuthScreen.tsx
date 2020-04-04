import React, {useState} from "react";
import {View, StyleSheet, Keyboard} from "react-native";
import {Container, Button, Text, Item, Input, Label} from 'native-base';
import {connect} from 'react-redux';
import {Base64} from 'js-base64';
import {isEmpty} from 'lodash';
import {Colors} from "../../common/constants/Colors";
import {login as loginAction, register as registerAction, setError} from "../redux/authActions";
import {inputValidate} from "../utils/inputValidate";

const AuthScreenComponent = ({navigation, currentUser, login, register, error, setError}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSignIn, setIsSignIn] = useState(true);

    if (!isEmpty(currentUser)) {
        navigation.navigate('Protected');
    }
    const signInText = 'Login';
    const signUpText = 'Register';
    const actionButtonText = isSignIn ? signInText : signUpText;
    const switchSignInText = isSignIn ? signUpText : signInText;
    const action = isSignIn ? login : register;
    const onPress = () => {
        Keyboard.dismiss();
        const emailValid = inputValidate('email', email, setError);
        const passwordValid = inputValidate('password', password, setError);
        console.log(emailValid, passwordValid);
        if (emailValid && passwordValid) {
            action({email, password: Base64.decode(password)});
        }
    };

    return (
        <Container style={styles.container}>
            <View style={styles.margin}>
                <Item style={styles.marginBottom} floatingLabel>
                    <Label style={styles.padding}>Email</Label>
                    <Input style={styles.padding} value={email} onChangeText={setEmail}/>
                </Item>
                <Item style={styles.marginBottom} floatingLabel>
                    <Label style={styles.padding}>Password</Label>
                    <Input
                        style={styles.padding}
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />
                </Item>
                {error && <Text style={styles.error}>{error}</Text>}
            </View>
            <Button
                style={[styles.button, styles.margin]}
                onPress={onPress}
            >
                <Text>{actionButtonText}</Text>
            </Button>
            <View style={styles.authSelection}>
                <Text>or </Text>
                <Text uppercase style={styles.authSelectionText} onPress={() => setIsSignIn(!isSignIn)}>
                    {switchSignInText}
                </Text>
            </View>
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
    },
    authSelection: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
    },
    authSelectionText: {
        color: 'blue',
    },
    error: {
        color: 'red',
        textAlign: 'center',
        marginVertical: 10,
    }
});

const mapStateToProps = (state) => {
    const {currentUser, error} = state.authReducer;
    return {
        currentUser,
        error,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        login: (payload) => dispatch(loginAction(payload)),
        register: (payload) => dispatch(registerAction(payload)),
        setError: (payload) => dispatch(setError(payload)),
    };
};

export const AuthScreen = connect(mapStateToProps, mapDispatchToProps)(AuthScreenComponent);