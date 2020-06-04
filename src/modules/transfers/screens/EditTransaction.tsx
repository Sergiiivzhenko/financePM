import React, {useState} from "react";
import {connect} from 'react-redux';
import {editTransaction, addTransaction} from "../redux/transfersActions";
import {TransactionForm} from "../components/TransactionForm";

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
    const initialTransaction = id ? transactions.find(transaction => transaction.id === id) : {};
    const {
        type,
        accountId,
        amount: initialAmount,
        categoryId,
        debt: initialDebt,
        description: initialDescription
    } = initialTransaction;
    const initialAccount = accountId ? accounts.find(account => account.id === accountId) : accounts[0];
    const initialCategory = categoryId ? categories.find(category => category.id === categoryId) : categories[0];
    const [account, setAccount] = useState(initialAccount);
    const [amount, setAmount] = useState(initialAmount || 0);
    const [category, setCategory] = useState(initialCategory);
    const [debt, setDebt] = useState(initialDebt || false);
    const [description, setDescription] = useState(initialDescription || '');
    const actionHandler = () => {
        const transaction = {
            type,
            accountId,
            amount,
            categoryId: category.id,
            debt,
            description
        };
        if (id) {
            console.log('before edit transaction');
            editTransaction({
                id,
                ...transaction
            });
        } else {
            addTransaction(transaction);
        }
        navigation.goBack();
    }
    const actionText = id ? 'Edit' : 'Add';
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
            actionText={actionText}
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
        addTransaction: (transaction) => dispatch(addTransaction(transaction)),
        editTransaction: (transaction) => dispatch(editTransaction(transaction)),
    };
};

export const EditTransactionScreen = connect(mapStateToProps, mapDispatchToProps)(EditTransactionScreenComponent);