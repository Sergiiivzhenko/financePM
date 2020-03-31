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
            console.log('logout ', action);
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
