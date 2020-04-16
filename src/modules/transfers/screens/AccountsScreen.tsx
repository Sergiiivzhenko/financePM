import React from "react";
import {StyleSheet, View, FlatList} from "react-native";
import {Button, Text} from "native-base";
import {connect} from 'react-redux';
import {removeAccount} from "../redux/transfersActions";
import {AccountCard} from "../components/AccountCard";

export const AccountsScreenComponent = ({navigation, accounts, removeAccount}) => {
    return (
        <View style={styles.container}>
            <Button style={styles.button} onPress={() => navigation.navigate('AddAccount')}>
                <Text>Add Account</Text>
            </Button>
            <FlatList
                data={accounts}
                renderItem={({item}) => <AccountCard item={item} removeAccount={removeAccount} />}
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
        accounts: state.transfersReducer.accounts,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        removeAccount: (accountId) => dispatch(removeAccount(accountId)),
    };
};

export const AccountsScreen = connect(mapStateToProps, mapDispatchToProps)(AccountsScreenComponent);