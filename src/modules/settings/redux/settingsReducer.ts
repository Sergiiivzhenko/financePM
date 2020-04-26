import {CATEGORY} from "../utils/category.enum";

const defaultCurrencies = [
    {
        id: '1',
        name: 'USD',
        coefficient: 25,
        symbol: '$'
    },
    {
        id: '2',
        name: 'EUR',
        coefficient: 30,
        symbol: '€'
    },
    {
        id: '3',
        name: 'HRN',
        coefficient: 1,
        symbol: '₴'
    },
];

const defaultCategories = [
    {id: '1', name: 'car', type: CATEGORY.OUTCOME},
    {id: '2', name: 'bank', type: CATEGORY.OUTCOME},
    {id: '3', name: 'house', type: CATEGORY.OUTCOME},
    {id: '4', name: 'pets', type: CATEGORY.OUTCOME},
    {id: '5', name: 'other', type: CATEGORY.OUTCOME},
    {id: '6', name: 'friends', type: CATEGORY.OUTCOME},
    {id: '7', name: 'food', type: CATEGORY.OUTCOME},
    {id: '8', name: 'utilities', type: CATEGORY.OUTCOME},
    {id: '9', name: 'health and beauty', type: CATEGORY.OUTCOME},
    {id: '10', name: 'credit', type: CATEGORY.OUTCOME},
    {id: '11', name: 'private', type: CATEGORY.OUTCOME},
    {id: '12', name: 'taxes', type: CATEGORY.OUTCOME},
    {id: '13', name: 'education', type: CATEGORY.OUTCOME},
    {id: '14', name: 'clothes', type: CATEGORY.OUTCOME},
    {id: '15', name: 'vacation', type: CATEGORY.OUTCOME},
    {id: '16', name: 'entertainment', type: CATEGORY.OUTCOME},
    {id: '17', name: 'family', type: CATEGORY.OUTCOME},
    {id: '18', name: 'sport', type: CATEGORY.OUTCOME},
    {id: '19', name: 'transport', type: CATEGORY.OUTCOME},
    {id: '20', name: 'services', type: CATEGORY.OUTCOME},
    {id: '21', name: 'kids', type: CATEGORY.OUTCOME},
    {id: '22', name: 'salary', type: CATEGORY.INCOME},
    {id: '23', name: 'gift', type: CATEGORY.INCOME},
    {id: '24', name: 'other', type: CATEGORY.INCOME},
];

const initialState = {
    currencies: defaultCurrencies,
    categories: defaultCategories,
};

export const settingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_CURRENCY': {
            return {
                ...state,
                currencies: [...state.currencies, action.currency],
            };
        }
        case 'EDIT_CURRENCY': {
            const currenciesWithoutUpdated = state.currencies.filter(currency => currency.id !== action.currency.id);
            return {
                ...state,
                currencies: [...currenciesWithoutUpdated, action.currency],
            };
        }
        case 'REMOVE_CURRENCY': {
            return {
                ...state,
                currencies:
                    state.currencies.filter(currency => currency.id === action.currencyId),
            };
        }
        case 'ADD_CATEGORY': {
            return {
                ...state,
                categories: [...state.currencies, action.category],
            };
        }
        case 'EDIT_CATEGORY': {
            const categoriesWithoutUpdated = state.categories.filter(category => category.id !== action.category.id);
            return {
                ...state,
                categories: [...categoriesWithoutUpdated, action.category],
            };
        }
        case 'REMOVE_CATEGORY': {
            return {
                ...state,
                categories:
                    state.categories.filter(category => category.id === action.categoryId),
            };
        }
        default: {
            return state;
        }
    }
};
