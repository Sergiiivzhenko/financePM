import React from "react";
import {Button, Text} from "native-base";
import {View, StyleSheet} from "react-native";

export const TransfersScreen = ({navigation}) => (
    <View>
        <Button style={styles.button} onPress={() => navigation.navigate('Accounts')}>
            <Text>Accounts</Text>
        </Button>
        <Button style={styles.button} onPress={() => navigation.navigate('Income')}>
            <Text>Income</Text>
        </Button>
        <Button style={styles.button} onPress={() => navigation.navigate('Outcome')}>
            <Text>Outcome</Text>
        </Button>
        <Button style={styles.button} onPress={() => navigation.navigate('MoneyTransfers')}>
            <Text>Money Transfers</Text>
        </Button>
        <Button style={styles.button} onPress={() => navigation.navigate('DebtManagement')}>
            <Text>Debt Management</Text>
        </Button>
    </View>
);

const styles = StyleSheet.create({
    button: {
        marginTop: 10,
    }
});