import React from "react";
import {Button, Text, View} from "react-native";

export const AuthScreen = ({navigation}) => (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Auth Screen</Text>
        <Button
            title="Go to Details"
            onPress={() => navigation.navigate('Home')}
        />
    </View>
);