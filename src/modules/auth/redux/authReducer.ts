const initialState = {
    loggedIn: false,
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN': {
            return {
                ...state,
                loggedIn: true,
            }
        }
        case 'LOGOUT': {
            action.navigation.navigate('Auth');
            return {
                ...state,
                loggedIn: false,
            }
        }
        default: {
            return state;
        }
    }
};
