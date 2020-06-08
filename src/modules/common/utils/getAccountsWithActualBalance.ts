import {CATEGORY} from "../../settings/utils/category.enum";

export const getAccountsWithActualBalance = (accounts, transactions) => {
    return accounts.map(account => {
        const balance = transactions
            .reduce((balance, transaction) => {
                if (transaction.accountId === account.id) {
                    if (transaction.type === CATEGORY.INCOME || transaction.debt) {
                        balance = balance + transaction.amount;
                    }
                    if (transaction.type === CATEGORY.OUTCOME) {
                        balance = balance - transaction.amount;
                    }
                }
                return balance;
            }, 0);
        return {
            ...account,
            balance,
        };
    })
};