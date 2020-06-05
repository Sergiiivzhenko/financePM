import React, {useState} from "react";
import {connect} from 'react-redux';
import {addTransaction} from "../redux/transfersActions";
import {DebtType, TransactionForm} from "../components/TransactionForm";

const AddTransactionScreenComponent = (
    {
        navigation,
        route,
        addTransaction,
        accounts,
        categories,
    }
) => {
    const {type, debt: debtFromNavigation, accountId} = route.params;
    const initialAccount = accountId ? accounts.find(account => account.id === accountId) : accounts[0];
    const initialCategory = categories[0];
    const [account, setAccount] = useState(initialAccount);
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState(initialCategory);
    const [debt, setDebt] = useState(debtFromNavigation || false);
    const [description, setDescription] = useState('');
    const actionHandler = () => {
        const transaction = {
            type: !debt && type,
            accountId: account.id,
            amount: debt && debt === DebtType.Lend ? -amount : amount,
            categoryId: category.id,
            debt: true,
            description
        };
        addTransaction(transaction);
        navigation.goBack();
    }
    return (
        <TransactionForm
            account={account}
            setAccount={setAccount}
            accounts={accounts}
            amount={amount}
            setAmount={setAmount}
            category={category}
            setCategory={setCategory}
            categories={categories}
            debt={debt}
            setDebt={setDebt}
            description={description}
            setDescription={setDescription}
            actionText={'Add'}
            actionHandler={actionHandler}
        />
    );
}

const mapStateToProps = (state) => {
    return {
        categories: state.settingsReducer.categories,
        accounts: state.transfersReducer.accounts,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTransaction: (transaction) => dispatch(addTransaction(transaction)),
    };
};

export const AddTransactionScreen = connect(mapStateToProps, mapDispatchToProps)(AddTransactionScreenComponent);