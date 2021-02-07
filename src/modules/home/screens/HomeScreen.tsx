import React from "react";
import {StyleSheet, ScrollView, View, TouchableOpacity} from "react-native";
import {connect} from 'react-redux';
import Constants from 'expo-constants';
import {HomeAccountCard} from "../components/HomeAccountCard";
import {getAccountsWithActualBalance} from "../../common/utils/getAccountsWithActualBalance";
import { AntDesign } from "@expo/vector-icons";

const HomeScreenComponent = ({navigation, accounts, transactions}) => {
    const onAddAccountHandler = () => navigation.navigate('Transfers', {screen: 'AddAccount'});
    const accountsWithActualBalance = getAccountsWithActualBalance(accounts, transactions);
    return (
        <ScrollView style={styles.container}>
            <View style={styles.list}>
                {accountsWithActualBalance.map(item => <HomeAccountCard key={item.id} item={item} />)}
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={onAddAccountHandler}>
                    <AntDesign name="plus" size={60} color="#2C45C6" style={styles.button} />
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight + 10,
    },
    addAccountButton: {
        margin: 5,
    },
    list: {
        flex: 1,
        flexWrap: 'wrap',
    },
    buttonContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    button: {
        borderRadius: 11,
        borderWidth: 1,
        borderColor: 'rgba(44, 69, 198, 0.3)',
    },
});

const mapStateToProps = (state) => {
    return {
        accounts: state.transfersReducer.accounts,
        transactions: state.transfersReducer.transactions,
    };
};

export const HomeScreen = connect(mapStateToProps, null)(HomeScreenComponent);