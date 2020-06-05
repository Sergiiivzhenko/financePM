import React from "react";
import {FlatList, StyleSheet, View} from "react-native";
import {connect} from 'react-redux';
import {TransactionCard} from "../components/TransactionCard";
import {removeTransaction} from "../redux/transfersActions";
import {CATEGORY} from "../../settings/utils/category.enum";
import {Button, Text} from "native-base";

export const OutcomeScreenComponent = ({navigation, transactions, removeTransaction}) => {
    const incomeTransactions = transactions.filter(transaction => transaction.type === CATEGORY.OUTCOME);
    return (
        <View style={styles.container}>
            <Button style={styles.button} onPress={() => navigation.navigate('AddTransaction', {type: CATEGORY.OUTCOME})}>
                <Text>Add Outcome</Text>
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

export const OutcomeScreen = connect(mapStateToProps, mapDispatchToProps)(OutcomeScreenComponent);