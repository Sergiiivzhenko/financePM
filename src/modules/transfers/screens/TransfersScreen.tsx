import React from "react";
import {Button, Text, View} from "react-native";

export const TransfersScreen = ({navigation}) => (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Transfers Screen</Text>
        <Button
            title="Go to Accounts"
            onPress={() => navigation.navigate('Accounts')}
        />
        <Button
            title="Go to Income"
            onPress={() => navigation.navigate('Income')}
        />
        <Button
            title="Go to Outcome"
            onPress={() => navigation.navigate('Outcome')}
        />
        <Button
            title="Go to DebtManagement"
            onPress={() => navigation.navigate('DebtManagement')}
        />
    </View>
);