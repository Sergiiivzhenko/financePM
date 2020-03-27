import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {HomeScreen} from "../../home/screens/HomeScreen";
import {TransfersScreen} from "../../transfers/screens/TransfersScreen";
import {ReportsScreen} from "../../reports/screens/ReportsScreen";
import {SettingsScreen} from "../../settings/screens/SettingsScreen";

const Tab = createBottomTabNavigator();

export const ProtectedTabNavigator = () => (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Transfers" component={TransfersScreen} />
        <Tab.Screen name="Reports" component={ReportsScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
);