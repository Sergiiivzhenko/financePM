import React from "react";
import {Button, Text, View} from "react-native";

export const AddIncomeScreen = ({navigation, route}) => {
    const {accountId} = route.params;
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>{`Account id ${accountId}`}</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Auth')}
            />
        </View>
    );
}