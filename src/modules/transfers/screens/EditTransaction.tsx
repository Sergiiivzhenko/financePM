import React from "react";
import {Button, View} from "react-native";
import {connect} from 'react-redux';
import {editTransaction, addTransaction} from "../redux/transfersActions";

// "accountId": "1590147879590",
//   "amount": 5005,
//   "categoryId": "24",
//   "debt": false,
//   "description": "house",
//   "id": "1590147886088",
//   "type": "income",
export const EditTransactionScreenComponent = (
    {
        navigation,
        route,
        transactions,
        addTransaction,
        editTransaction,
        accounts,
        categories,
    }
) => {
    const {id} = route.params;
    const transaction = transactions.find(transaction => transaction.id === id);
    console.log('id -> ', transaction);
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Auth')}
            />
        </View>
    );
}

const mapStateToProps = (state) => {
    return {
        transactions: state.transfersReducer.transactions,
        categories: state.settingsReducer.categories,
        accounts: state.transfersReducer.accounts,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTransaction: (transaction) => dispatch(addTransaction(transaction)),
        editTransaction: (transaction) => dispatch(editTransaction(transaction)),
    };
};

export const EditTransactionScreen = connect(mapStateToProps, mapDispatchToProps)(EditTransactionScreenComponent);