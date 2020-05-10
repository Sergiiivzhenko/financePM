import {generateId} from "../../common/utils/uuid";

const initialState = {
    accounts: [],
    transactions: [],
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
