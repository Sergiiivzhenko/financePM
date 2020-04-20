import React from "react";
import {Button, Text} from "native-base";
import {Image, StyleSheet, View} from "react-native";

export const HomeAccountCard = ({item}) => {
    console.log(item);
    const {name, icon, currency, balance} = item;
    let navigation;
    return (
        <View style={styles.container}>
            <View style={[styles.row, styles.info]}>
                <View style={styles.row}>
                    <Image source={icon} style={styles.icon} resizeMode='contain'/>
                    <Text>{name}</Text>
                </View>
                <View style={styles.buttonsContainer}>
                    <Text>{`${balance} ${currency.symbol}`}</Text>
                    <Button style={styles.button} onPress={() => navigation.navigate('AddIncome')}>
                        <Text>+</Text>
                    </Button>
                    <Button style={styles.button} onPress={() => navigation.navigate('AddOutcome')}>
                        <Text>-</Text>
                    </Button>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 10,
        justifyContent: 'space-between',
    },
    row: {
        flexDirection: 'row',
    },
    info: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    icon: {
        height: 30,
        width: 60,
    },
    close: {
        width: 50,
        alignItems: 'center',
        alignSelf: 'center'
    },
    button: {
        margin: 5,
        justifyContent: 'center',
    },
    buttonsContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: "space-between",
    }
});
