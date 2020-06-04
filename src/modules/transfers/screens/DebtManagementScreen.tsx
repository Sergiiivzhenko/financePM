import React from "react";
import {FlatList, StyleSheet, View} from "react-native";
import {connect} from 'react-redux';
import {TransactionCard} from "../components/TransactionCard";
import {removeTransaction} from "../redux/transfersActions";
import {Button, Text} from "native-base";

export const DebtManagementScreenComponent = ({navigation, transactions, removeTransaction}) => {
    const incomeTransactions = transactions.filter(transaction => transaction.debt);
    return (
        <View style={styles.container}>
            <Button style={styles.button} onPress={() => navigation.navigate('EditTransaction', {debt: true})}>
                <Text>Add/Give Debt</Text>
            </Button>
            <FlatList
                data={incomeTransactions}
                renderItem={({item}) => <TransactionCard item={item} removeTransaction={removeTransaction} />}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
    },
    button: {
        marginTop: 10,
    }
});

const mapStateToProps = (state) => {
    return {
        transactions: state.transfersReducer.transactions,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        removeTransaction: (transactionId) => dispatch(removeTransaction(transactionId)),
    };
};

export const DebtManagementScreen = connect(mapStateToProps, mapDispatchToProps)(DebtManagementScreenComponent);