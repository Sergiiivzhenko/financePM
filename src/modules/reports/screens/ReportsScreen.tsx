import React from "react";
import {StyleSheet, View} from "react-native";
import {Button, Text} from "native-base";

export const ReportsScreen = ({navigation}) => (
    <View>
        <Button style={styles.button} onPress={() => navigation.navigate('IncomeOutcomeReport')}>
            <Text>Income and Outcome</Text>
        </Button>
        <Button style={styles.button} onPress={() => navigation.navigate('IncomeCategoriesReport')}>
            <Text>Income by Categories</Text>
        </Button>
        <Button style={styles.button} onPress={() => navigation.navigate('OutcomeCategoriesReport')}>
            <Text>Outcome by Categories</Text>
        </Button>
        <Button style={styles.button} onPress={() => navigation.navigate('IncomeMonthReport')}>
            <Text>Income by Months</Text>
        </Button>
        <Button style={styles.button} onPress={() => navigation.navigate('OutcomeMonthReport')}>
            <Text>Outcome by Months</Text>
        </Button>
    </View>
);

const styles = StyleSheet.create({
    button: {
        marginTop: 10,
    }
});