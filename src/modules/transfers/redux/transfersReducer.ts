import {generateId} from "../../common/utils/uuid";

// TODO: dev feature, remove or update for prod
const defaultAccounts = [
    {
        balance: 0,
        currency: {
            coefficient: 25,
            id: "1",
            name: "USD",
            symbol: "$",
        },
        icon: 18,
        id: "1590147879590",
        name: "dollars",
    },
    {
        balance: 0,
        currency: {
            id: '2',
            name: 'EUR',
            coefficient: 30,
            symbol: '€'
        },
        icon: 20,
        id: "1590147886071",
        name: "euros",
    },
];

// TODO: dev feature, remove or update for prod
const defaultTransactions = [
    {
        id: '1590147886074',
        accountId: '1590147886071',
        categoryId: '7',
        amount: 100,
        debt: false,
        description: 'food'
    },
    {
        id: '1590147886075',
        accountId: '1590147886071',
        categoryId: '8',
        amount: 3000,
        debt: false,
        description: 'light, gas, other'
    },
    {
        id: '1590147886076',
        accountId: '1590147886071',
        categoryId: '3',
        amount: 5000,
        debt: false,
        description: 'house'
    },
    {
        id: '1590147886077',
        accountId: '1590147886071',
        categoryId: '2',
        amount: 1000,
        debt: false,
        description: 'credit'
    },
    {
        id: '1590147886078',
        accountId: '1590147879590',
        categoryId: '3',
        amount: 5005,
        debt: false,
        description: 'house'
    },
    {
        id: '1590147886079',
        accountId: '1590147879590',
        categoryId: '2',
        amount: 1001,
        debt: false,
        description: 'credit'
    },
];

const initialState = {
    accounts: defaultAccounts,
    transactions: defaultTransactions,
};

export const transfersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ACCOUNT': {
            const account = {...action.account, id: generateId(), balance: 0};
            return {
                ...state,
                accounts: [...state.accounts, account],
            }
        }
        case 'EDIT_ACCOUNT': {
            const accountsWithoutUpdated = state.accounts.filter(account => account.id !== action.account.id);
            return {
                ...state,
                accounts: [...accountsWithoutUpdated, action.account],
            }
        }
        case 'REMOVE_ACCOUNT': {
            return {
                ...state,
                accounts:
                    state.accounts.filter(account => account.id !== action.accountId),
            }
        }
        case 'ADD_TRANSACTION': {
            return {
                ...state,
                transactions: [...state.transactions, {...action.transaction, id: generateId()}],
            }
        }
        case 'EDIT_TRANSACTION': {
            const transactionsWithoutUpdated = state.transactions.filter(transaction => transaction.id !== action.transaction.id);
            return {
                ...state,
                transactions: [...transactionsWithoutUpdated, action.transaction],
            }
        }
        case 'REMOVE_TRANSACTION': {
            return {
                ...state,
                transactions:
                    state.transactions.filter(transaction => transaction.id !== action.transactionId),
            }
        }
        default: {
            return state;
        }
    }
};
