import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {PersistGate} from 'redux-persist/es/integration/react'
import {Provider} from 'react-redux';
import {StackNavigator} from "../navigation/navigators/StackNavigator";
import {store, persistor} from "./store";
import {AsyncStorage} from "react-native";

export const RootApp = () => {
    // TODO: remove for prod clearing storage
    AsyncStorage.clear();
    console.log('state -> ', store.getState());
    return (
        <Provider store={store}>
            <PersistGate
                loading={null}
                persistor={persistor}
            >
                <NavigationContainer>
                    <StackNavigator/>
                </NavigationContainer>
            </PersistGate>
        </Provider>
    );
};