import React from "react";
import {StyleSheet, View} from "react-native";
import {Button, Text} from "native-base";

export const AccountsScreen = ({navigation}) => (
    <View style={styles.container}>
        <Button style={styles.button} onPress={() => navigation.navigate('AddAccount')}>
            <Text>Add Account</Text>
        </Button>
        <Text>AccountsScreen</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        marginTop: 10,
    }
});