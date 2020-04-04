import {combineReducers} from 'redux';
import {authReducer} from "../auth/redux/authReducer";
import {balanceReducer} from "../home/redux/balanceReducer";
import {settingsReducer} from "../settings/redux/settingsReducer";

export const rootReducer = combineReducers({
    authReducer,
    balanceReducer,
    settingsReducer,
});