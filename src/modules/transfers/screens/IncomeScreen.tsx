import React from "react";
import {FlatList, StyleSheet, View} from "react-native";
import {connect} from 'react-redux';
import {TransactionCard} from "../components/TransactionCard";
import {removeTransaction} from "../redux/transfersActions";
import {CATEGORY} from "../../settings/utils/category.enum";

export const IncomeScreenComponent = ({transactions, removeTransaction}) => {
    const incomeTransactions = transactions.filter(transaction => transaction.type === CATEGORY.INCOME);
    return (
        <View style={styles.container}>
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

export const IncomeScreen = connect(mapStateToProps, mapDispatchToProps)(IncomeScreenComponent);