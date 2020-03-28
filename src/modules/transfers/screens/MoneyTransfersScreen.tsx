import React from "react";
import {Button, Text, View} from "react-native";

export const MoneyTransfersScreen = ({navigation}) => (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>MoneyTransfersScreen</Text>
        <Button
            title="Go to Details"
            onPress={() => navigation.navigate('Auth')}
        />
    </View>
);