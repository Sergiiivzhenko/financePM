import React from "react";
import {Button, Text, View} from "react-native";

export const OutcomeScreen = ({navigation}) => {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>{`Outcome screen`}</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Auth')}
            />
        </View>
    );
}