import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';
import {HomeScreen} from "../../home/screens/HomeScreen";
import {TransfersStackNavigator} from "./TransfersStackNavigator";
import {Colors} from "../../../constants/Colors";
import {SettingsStackNavigator} from "./SettingsStackNavigator";
import {ReportsStackNavigator} from "./ReportsStackNavigator";

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
            tabBarIcon: ({color}) => <Ionicons name={getIcon(route.name)} size={24} color={color} />,
        })}
        tabBarOptions={{
            activeTintColor: Colors.blue,
            inactiveTintColor: Colors.gray,
        }}
        >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Transfers" component={TransfersStackNavigator} />
        <Tab.Screen name="Reports" component={ReportsStackNavigator} />
        <Tab.Screen name="Settings" component={SettingsStackNavigator} />
    </Tab.Navigator>
);