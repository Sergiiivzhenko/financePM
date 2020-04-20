import React from "react";
import {Button, Text, View} from "react-native";

export const AddOutcomeScreen = ({navigation}) => (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>OutcomeScreen</Text>
        <Button
            title="Go to Details"
            onPress={() => navigation.navigate('Auth')}
        />
    </View>
);