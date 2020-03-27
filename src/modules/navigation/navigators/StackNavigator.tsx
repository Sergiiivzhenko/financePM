import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {AuthScreen} from "../../auth/screens/AuthScreen";
import {ProtectedTabNavigator} from "./ProtectedTabNavigator";

const Stack = createStackNavigator();

export const StackNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Auth" component={AuthScreen}/>
        <Stack.Screen name="Home" component={ProtectedTabNavigator}/>
    </Stack.Navigator>
);
