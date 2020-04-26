export const addCurrency = (currency) => ({
    type: 'ADD_CURRENCY',
    currency,
});

export const editCurrency = (currency) => ({
    type: 'EDIT_CURRENCY',
    currency,
});

export const removeCurrency = (currencyId) => ({
    type: 'REMOVE_CURRENCY',
    currencyId,
});

export const addCategory = (category) => ({
    type: 'ADD_CATEGORY',
    category,
});

export const editCategory = (category) => ({
    type: 'EDIT_CATEGORY',
    category,
});

export const removeCategory = (categoryId) => ({
    type: 'REMOVE_CATEGORY',
    categoryId,
});