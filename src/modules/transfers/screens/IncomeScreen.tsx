import React from "react";
import {Button, Text, View} from "react-native";

export const IncomeScreen = ({navigation}) => {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>{`Income screen`}</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Auth')}
            />
        </View>
    );
}