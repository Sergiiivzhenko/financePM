import React from "react";
import {StyleSheet, View} from "react-native";
import {Button, Text} from "native-base";
import {connect} from 'react-redux';
import {logout as logoutAction} from "../../auth/redux/authActions";

const SettingsScreenComponent = ({navigation, logout}) => (
    <View>
        <Button style={styles.button} onPress={() => navigation.navigate('Categories')}>
            <Text>Categories</Text>
        </Button>
        <Button style={styles.button} onPress={() => logout(navigation)}>
            <Text>Logout</Text>
        </Button>
    </View>
);

const styles = StyleSheet.create({
    button: {
        marginTop: 10,
    }
});

const mapDispatchToProps = (dispatch) => {
    return {
        logout: (navigation) => dispatch(logoutAction(navigation)),
    };
};

export const SettingsScreen = connect(null, mapDispatchToProps)(SettingsScreenComponent);