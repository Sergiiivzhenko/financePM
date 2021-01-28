import {isEmpty} from 'lodash';
import {generateId} from "../../common/utils/uuid";

const initialState = {
    users: [
        {
            email: "sergiiivzhenko@gmail.com",
            id: "1611861988751",
            password: "ӽ=×ßu"
        }
    ],
    error: null,
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'REGISTER': {
            const user = {...action.userData, id: generateId()};
            return {
                ...state,
                error: null,
                users: [...state.users, user],
                currentUser: user,
            }
        }
        case 'LOGIN': {
            const user = state.users.find(
                user => user.email === action.userData.email &&
                    user.password === action.userData.password
            );
            return {
                ...state,
                currentUser: user,
                error: isEmpty(user) && 'Email or password are incorrect',
            }
        }
        case 'LOGOUT': {
            action.navigation.navigate('Auth');
            return {
                ...state,
                currentUser: null,
            }
        }
        case 'ERROR': {
            return {
                ...state,
                error: action.error,
            }
        }
        default: {
            return state;
        }
    }
};
