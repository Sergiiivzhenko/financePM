import React, {useState} from "react";
import {connect} from 'react-redux';
import {addAccount} from "../redux/transfersActions";
import {accountIcons} from "../utils/accountIcons";
import {AccountForm} from "../components/AccountForm";

export const AddAccountScreenComponent = ({addAccount, currencies, navigation}) => {
    const [name, setName] = useState('');
    const [currency, setCurrency] = useState(currencies[0]);
    const [icon, setIcon] = useState(accountIcons[0]);
    const onAddAccountHandler = () => {
        addAccount({name, currency, icon});
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
            actionText="Add Account"
            actionHandler={onAddAccountHandler}
        />
    );
};

const mapStateToProps = (state) => {
    return {
        currencies: state.settingsReducer.currencies,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addAccount: (account) => dispatch(addAccount(account)),
    };
};

export const AddAccountScreen = connect(mapStateToProps, mapDispatchToProps)(AddAccountScreenComponent);
