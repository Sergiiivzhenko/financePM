import {combineReducers} from 'redux';
import {authReducer} from "../auth/redux/authReducer";
import {balanceReducer} from "../home/redux/balanceReducer";
import {settingsReducer} from "../settings/redux/settingsReducer";
import {transfersReducer} from "../transfers/redux/transfersReducer";

export const rootReducer = combineReducers({
    authReducer,
    balanceReducer,
    settingsReducer,
    transfersReducer,
});