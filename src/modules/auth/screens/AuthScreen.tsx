import React from "react";
import {View, StyleSheet} from "react-native";
import {Container, Button, Text, Item, Input, Label} from 'native-base';

export const AuthScreen = ({navigation}) => (
    <Container style={styles.container}>
        <View style={styles.margin}>
            <Item style={styles.marginBottom}>
                <Label style={styles.padding}>Username</Label>
                <Input style={styles.padding}/>
            </Item>
            <Item style={styles.marginBottom}>
                <Label style={styles.padding}>Password</Label>
                <Input style={styles.padding}/>
            </Item>
        </View>
        <Button style={[styles.button, styles.margin]} onPress={() => navigation.navigate('Protected')}>
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
        paddingVertical: 30,
        backgroundColor: '#1976d2',
    },
    marginBottom: {
        marginBottom: 10,
    },
    margin: {
        marginHorizontal: 15,
    },
    padding: {
        paddingHorizontal: 20,
    }
});