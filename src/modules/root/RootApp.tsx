import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {StackNavigator} from "../navigation/navigators/StackNavigator";

export const RootApp = () => (
    <NavigationContainer>
        <StackNavigator />
    </NavigationContainer>
);