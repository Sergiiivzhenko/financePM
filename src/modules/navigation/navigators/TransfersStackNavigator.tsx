import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {TransfersScreen} from "../../transfers/screens/TransfersScreen";
import {AccountsScreen} from "../../transfers/screens/AccountsScreen";
import {IncomeScreen} from "../../transfers/screens/IncomeScreen";
import {OutcomeScreen} from "../../transfers/screens/OutcomeScreen";
import {DebtManagementScreen} from "../../transfers/screens/DebtManagementScreen";
import {MoneyTransfersScreen} from "../../transfers/screens/MoneyTransfersScreen";

const Stack = createStackNavigator();

export const TransfersStackNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="TransfersMain" component={TransfersScreen} options={{title: 'Transfers'}}/>
        <Stack.Screen name="Accounts" component={AccountsScreen} options={{title: 'Accounts'}}/>
        <Stack.Screen name="Income" component={IncomeScreen} options={{title: 'Income'}}/>
        <Stack.Screen name="Outcome" component={OutcomeScreen} options={{title: 'Outcome'}}/>
        <Stack.Screen name="MoneyTransfers" component={MoneyTransfersScreen} options={{title: 'Money Transfers'}}/>
        <Stack.Screen name="DebtManagement" component={DebtManagementScreen} options={{title: 'DebtManagement'}}/>
    </Stack.Navigator>
);
