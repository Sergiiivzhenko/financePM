import React from "react";
import {Button, View} from "react-native";

export const EditTransactionScreen = ({navigation}) => {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Auth')}
            />
        </View>
    );
}