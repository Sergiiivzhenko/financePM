import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';
import {HomeScreen} from "../../home/screens/HomeScreen";
import {TransfersScreen} from "../../transfers/screens/TransfersScreen";
import {ReportsScreen} from "../../reports/screens/ReportsScreen";
import {SettingsScreen} from "../../settings/screens/SettingsScreen";

const Tab = createBottomTabNavigator();

const getIcon = name => {
    switch (name) {
        case 'Home': {
            return 'ios-card';
        }
        case 'Transfers': {
            return 'ios-swap';
        }
        case 'Reports': {
            return 'ios-stats';
        }
        case 'Settings': {
            return 'ios-settings';
        }
        default: return '';
    }
};

export const ProtectedTabNavigator = () => (
    <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: () => <Ionicons name={getIcon(route.name)} size={24} />,
        })}
        >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Transfers" component={TransfersScreen} />
        <Tab.Screen name="Reports" component={ReportsScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
);