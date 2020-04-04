export const addCurrency = (currency) => ({
    type: 'ADD_CURRENCY',
    currency,
});

export const removeCurrency = (currencyName) => ({
    type: 'REMOVE_CURRENCY',
    currencyName,
});