import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {TransfersScreen} from "../../transfers/screens/TransfersScreen";
import {AddAccountScreen} from "../../transfers/screens/AddAccountScreen";
import {IncomeScreen} from "../../transfers/screens/IncomeScreen";
import {OutcomeScreen} from "../../transfers/screens/OutcomeScreen";
import {DebtManagementScreen} from "../../transfers/screens/DebtManagementScreen";
import {MoneyTransfersScreen} from "../../transfers/screens/MoneyTransfersScreen";
import {AccountsScreen} from "../../transfers/screens/AccountsScreen";
import {EditAccountScreen} from "../../transfers/screens/EditAccountScreen";

const Stack = createStackNavigator();

export const TransfersStackNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="TransfersMain" component={TransfersScreen} options={{title: 'Transfers'}}/>
        <Stack.Screen name="Accounts" component={AccountsScreen} options={{title: 'Accounts'}}/>
        <Stack.Screen name="AddAccount" component={AddAccountScreen} options={{title: 'Add Account'}}/>
        <Stack.Screen name="EditAccount" component={EditAccountScreen} options={{title: 'Edit Account'}}/>
        <Stack.Screen name="Income" component={IncomeScreen} options={{title: 'Income'}}/>
        <Stack.Screen name="Outcome" component={OutcomeScreen} options={{title: 'Outcome'}}/>
        <Stack.Screen name="MoneyTransfers" component={MoneyTransfersScreen} options={{title: 'Money Transfers'}}/>
        <Stack.Screen name="DebtManagement" component={DebtManagementScreen} options={{title: 'DebtManagement'}}/>
    </Stack.Navigator>
);
