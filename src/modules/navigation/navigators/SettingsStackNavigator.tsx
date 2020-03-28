import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {SettingsScreen} from "../../settings/screens/SettingsScreen";
import {CategoriesScreen} from "../../settings/screens/CategoriesScreen";

const Stack = createStackNavigator();

export const SettingsStackNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Settings" component={SettingsScreen} options={{title: 'Settings'}}/>
        <Stack.Screen name="Categories" component={CategoriesScreen} options={{title: 'Categories'}}/>
 </Stack.Navigator>
);
