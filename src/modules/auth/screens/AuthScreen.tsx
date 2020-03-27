import React from "react";
import {View, StyleSheet} from "react-native";
import {Container, Button, Text, Item, Input, Label} from 'native-base';

export const AuthScreen = ({navigation}) => (
    <Container style={styles.container}>
        <View style={styles.margin}>
            <Item rounded stackedLabel style={styles.marginBottom}>
                <Label style={styles.padding}>Username</Label>
                <Input style={styles.padding}/>
            </Item>
            <Item rounded stackedLabel style={styles.marginBottom}>
                <Label style={styles.padding}>Password</Label>
                <Input style={styles.padding}/>
            </Item>
        </View>
        <Button rounded style={[styles.button, styles.margin]} info onPress={() => navigation.navigate('Protected')}>
            <Text>Login</Text>
        </Button>
    </Container>
);

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
    },
    button: {
        justifyContent: 'center',
        marginLeft: 20,
    },
    marginBottom: {
        marginBottom: 10,
    },
    margin: {
        margin: 15,
    },
    padding: {
        paddingHorizontal: 20,
    }
});