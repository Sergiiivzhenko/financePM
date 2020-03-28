import React from "react";
import {StyleSheet, View} from "react-native";
import {Button, Text} from "native-base";

export const SettingsScreen = ({navigation}) => (
    <View>
        <Button style={styles.button} onPress={() => navigation.navigate('Categories')}>
            <Text>Categories</Text>
        </Button>
    </View>
);

const styles = StyleSheet.create({
    button: {
        marginTop: 10,
    }
});