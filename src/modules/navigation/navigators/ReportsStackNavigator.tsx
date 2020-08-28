import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {ReportsScreen} from "../../reports/screens/ReportsScreen";
import {IncomeOutcomeReportScreen} from "../../reports/screens/IncomeOutcomeReportScreen";
import {IncomeCategoriesReportScreen} from "../../reports/screens/IncomeCategoriesReportScreen";
import {OutcomeCategoriesReportScreen} from "../../reports/screens/OutcomeCategoriesReportScreen";
import {IncomeMonthReportScreen} from "../../reports/screens/IncomeMonthReportScreen";
import {OutcomeMonthReportScreen} from "../../reports/screens/OutcomeMonthReportScreen";

const Stack = createStackNavigator();

export const ReportsStackNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Reports" component={ReportsScreen} options={{title: 'Reports'}}/>
        <Stack.Screen name="IncomeOutcomeReport" component={IncomeOutcomeReportScreen} options={{title: 'Income and Outcome'}}/>
        <Stack.Screen name="IncomeCategoriesReport" component={IncomeCategoriesReportScreen} options={{title: 'Income by Categories'}}/>
        <Stack.Screen name="OutcomeCategoriesReport" component={OutcomeCategoriesReportScreen} options={{title: 'Outcome by Categories'}}/>
        <Stack.Screen name="IncomeMonthReport" component={IncomeMonthReportScreen} options={{title: 'Income by Months'}}/>
        <Stack.Screen name="OutcomeMonthReport" component={OutcomeMonthReportScreen} options={{title: 'Outcome by Months'}}/>
    </Stack.Navigator>
);
