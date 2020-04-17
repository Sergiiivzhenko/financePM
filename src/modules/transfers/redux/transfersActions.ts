export const addAccount = (account) => ({
    type: 'ADD_ACCOUNT',
    account,
});

export const editAccount = (account) => ({
    type: 'EDIT_ACCOUNT',
    account,
});

export const removeAccount = (accountId) => ({
    type: 'REMOVE_ACCOUNT',
    accountId,
});

export const addTransaction = (transaction) => ({
    type: 'ADD_TRANSACTION',
    transaction,
});

export const removeTransaction = (transactionId) => ({
    type: 'REMOVE_TRANSACTION',
    transactionId,
});