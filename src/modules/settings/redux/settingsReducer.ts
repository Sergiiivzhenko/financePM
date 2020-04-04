const defaultCurrencies = [
    {
        name: 'USD',
        coefficient: 25,
        symbol: '$'
    },
    {
        name: 'EUR',
        coefficient: 30,
        symbol: '€'
    },
    {
        name: 'HRN',
        coefficient: 1,
        symbol: '₴'
    },
];

const initialState = {
    currencies: defaultCurrencies,
};

export const settingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_CURRENCY': {
            return {
                ...state,
                currencies: [...state.currencies, action.currency],
            }
        }
        case 'REMOVE_CURRENCY': {
            return {
                ...state,
                currencies:
                    state.currencies.filter(currency => currency.name === action.currencyName),
            }
        }
        default: {
            return state;
        }
    }
};
