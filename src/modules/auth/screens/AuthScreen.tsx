import React, {useState} from "react";
import {View, StyleSheet, Keyboard, TouchableOpacity} from "react-native";
import {Container, Button, Text, Item, Input} from 'native-base';
import Constants from "expo-constants";
import {connect} from 'react-redux';
import {Base64} from 'js-base64';
import {isEmpty} from 'lodash';
import {Colors} from "../../common/constants/Colors";
import {login as loginAction, register as registerAction, setError} from "../redux/authActions";
import {inputValidate} from "../utils/inputValidate";

const AuthScreenComponent = ({navigation, currentUser, login, register, error, setError}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
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
        let repeatPasswordValid = true;
        let arePasswordsEqual = true;
        if (!isSignIn) {
            repeatPasswordValid = inputValidate('password', repeatPassword, setError);
            arePasswordsEqual = password === repeatPassword;
            if (!arePasswordsEqual) {
                setError('Passwords are not equal');
            }
        }
        if (emailValid && passwordValid && repeatPasswordValid && arePasswordsEqual) {
            action({email, password: Base64.decode(password)});
        }
    };

    return (
        <View style={styles.mainContainer}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => setIsSignIn(!isSignIn)} style={styles.leftNavigationContainer}>
                    <Text style={styles.leftNavigation}>{switchSignInText}</Text>
                </TouchableOpacity>
                <Text style={styles.title}>{actionButtonText}</Text>
            </View>
            <Container style={styles.container}>
                <View style={styles.margin}>
                    <Text style={styles.label}>Email</Text>
                    <Item style={styles.inputContainer} rounded>
                        <Input style={styles.padding} value={email} onChangeText={setEmail}/>
                    </Item>
                    <Text style={styles.label}>Password</Text>
                    <Item style={styles.inputContainer} rounded>
                        <Input
                            style={styles.padding}
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry
                        />
                    </Item>
                    {!isSignIn && (
                        <>
                        <Text style={styles.label}>Repeat password</Text>
                        <Item style={styles.inputContainer} rounded>
                            <Input
                                style={styles.padding}
                                value={repeatPassword}
                                onChangeText={setRepeatPassword}
                                secureTextEntry
                            />
                        </Item>
                        </>
                    )}
                    {error && <Text style={styles.error}>{error}</Text>}
                </View>
                <Button
                    style={[styles.button, styles.margin]}
                    onPress={onPress}
                >
                    <Text>{actionButtonText}</Text>
                </Button>
            </Container>
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        borderWidth: 2,
        borderColor: '#969BBA',
        borderRadius: 10,
        marginBottom: 20,
    },
    label: {
        paddingLeft: 5,
        fontSize: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    leftNavigationContainer: {
        position: 'absolute',
        left: 10,
    },
    leftNavigation: {
        color: Colors.blue,
        fontSize: 18,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    mainContainer: {
        flex: 1,
        paddingTop: Constants.statusBarHeight + 10,
        backgroundColor: 'white',
    },
    container: {
        justifyContent: 'center',
    },
    button: {
        justifyContent: 'center',
        marginLeft: 20,
        marginTop: 20,
        paddingVertical: 30,
        backgroundColor: Colors.blue,
        borderRadius: 10,
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