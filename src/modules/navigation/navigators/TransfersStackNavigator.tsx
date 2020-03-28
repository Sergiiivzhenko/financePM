import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {TransfersScreen} from "../../transfers/screens/TransfersScreen";
import {AccountsScreen} from "../../transfers/screens/AccountsScreen";
import {IncomeScreen} from "../../transfers/screens/IncomeScreen";
import {OutcomeScreen} from "../../transfers/screens/OutcomeScreen";
import {DebtManagementScreen} from "../../transfers/screens/DebtManagementScreen";

const Stack = createStackNavigator();

export const TransfersStackNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="TransfersMain" component={TransfersScreen}/>
        <Stack.Screen name="Accounts" component={AccountsScreen}/>
        <Stack.Screen name="Income" component={IncomeScreen}/>
        <Stack.Screen name="Outcome" component={OutcomeScreen}/>
        <Stack.Screen name="DebtManagement" component={DebtManagementScreen}/>
    </Stack.Navigator>
);
