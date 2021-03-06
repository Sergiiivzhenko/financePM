import React, {useState} from "react";
import {connect} from 'react-redux';
import {editTransaction} from "../redux/transfersActions";
import {DebtType, TransactionForm} from "../components/TransactionForm";

const EditTransactionScreenComponent = (
    {
        navigation,
        route,
        transactions,
        editTransaction,
        accounts,
        categories,
    }
) => {
    const {id} = route.params;
    const initialTransaction = transactions.find(transaction => transaction.id === id);
    const {
        type,
        accountId,
        amount: initialAmount,
        categoryId,
        debt: initialDebt,
        description: initialDescription
    } = initialTransaction;
    const initialAccount = accounts.find(account => account.id === accountId);
    const initialCategory = categories.find(category => category.id === categoryId);
    const [account, setAccount] = useState(initialAccount);
    const [amount, setAmount] = useState(initialAmount);
    const [category, setCategory] = useState(initialCategory);
    const [debt, setDebt] = useState(initialDebt);
    const [description, setDescription] = useState(initialDescription);
    const actionHandler = () => {
        const transaction = {
            id,
            type: !debt && type,
            accountId,
            amount: debt && debt === DebtType.Lend ? -amount : amount,
            categoryId: category.id,
            debt: !!debt,
            description
        };
        editTransaction(transaction);
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
            actionText={'Edit'}
            actionHandler={actionHandler}
        />
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
        editTransaction: (transaction) => dispatch(editTransaction(transaction)),
    };
};

export const EditTransactionScreen = connect(mapStateToProps, mapDispatchToProps)(EditTransactionScreenComponent);