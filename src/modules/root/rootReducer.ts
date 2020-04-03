import { combineReducers } from 'redux';
import {authReducer} from "../auth/redux/authReducer";
import {balanceReducer} from "../home/redux/balanceReducer";

export const rootReducer = combineReducers({
    authReducer,
    balanceReducer,
});