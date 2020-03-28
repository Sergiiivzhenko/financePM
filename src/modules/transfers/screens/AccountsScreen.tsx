import React from "react";
import {Button, Text, View} from "react-native";

export const AccountsScreen = ({navigation}) => (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>AccountsScreen</Text>
        <Button
            title="Go to Details"
            onPress={() => navigation.navigate('Auth')}
        />
    </View>
);