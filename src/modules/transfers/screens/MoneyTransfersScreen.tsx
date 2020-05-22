import React from "react";
import {FlatList, StyleSheet, View} from "react-native";
import {connect} from 'react-redux';
import {TransactionCard} from "../components/TransactionCard";
import {removeTransaction} from "../redux/transfersActions";

export const MoneyTransfersScreenComponent = ({transactions, removeTransaction}) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={transactions}
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

export const MoneyTransfersScreen = connect(mapStateToProps, mapDispatchToProps)(MoneyTransfersScreenComponent);