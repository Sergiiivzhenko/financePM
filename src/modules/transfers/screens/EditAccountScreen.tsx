import React, {useState} from "react";
import {connect} from 'react-redux';
import {useRoute} from '@react-navigation/native';
import {editAccount} from "../redux/transfersActions";
import {AccountForm} from "../components/AccountForm";

export const EditAccountScreenComponent = ({editAccount, accounts, currencies, navigation}) => {
    const route = useRoute();
    // @ts-ignore
    const accountInStore = accounts.find(account => account.id === route.params.accountId);
    const [name, setName] = useState(accountInStore.name);
    const [currency, setCurrency] = useState(accountInStore.currency);
    const [icon, setIcon] = useState(accountInStore.icon);
    const onEditAccountHandler = () => {
        editAccount({...accountInStore, name, currency, icon});
        navigation.navigate('Accounts');
    };
    return (
        <AccountForm
            name={name}
            setName={setName}
            currency={currency}
            setCurrency={setCurrency}
            icon={icon}
            setIcon={setIcon}
            currencies={currencies}
            actionText="Edit Account"
            actionHandler={onEditAccountHandler}
        />
    );
};

const mapStateToProps = (state) => {
    return {
        accounts: state.transfersReducer.accounts,
        currencies: state.settingsReducer.currencies,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        editAccount: (account) => dispatch(editAccount(account)),
    };
};

export const EditAccountScreen = connect(mapStateToProps, mapDispatchToProps)(EditAccountScreenComponent);
