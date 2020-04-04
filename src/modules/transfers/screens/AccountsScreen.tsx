import React, {useState} from "react";
import {Text, View, StyleSheet, Picker} from "react-native";
import {connect} from 'react-redux';
import {addAccount, removeAccount} from "../redux/transfersActions";
import {Button, Container, Input, Item, Label} from "native-base";
import {Colors} from "../../common/constants/Colors";

export const AccountsScreenComponent = ({addAccount, currencies}) => {
    const [name, setName] = useState('');
    return (
        <Container style={styles.container}>
            <View style={styles.margin}>
                <Item style={styles.marginBottom} floatingLabel>
                    <Label style={styles.padding}>Email</Label>
                    <Input style={styles.padding} value={name} onChangeText={setName}/>
                </Item>
                <Item style={styles.marginBottom} floatingLabel>
                    <Picker>
                        {currencies.map(currency => (
                            <Picker.Item label={currency.name} value={currency.name} />
                        ))}
                    </Picker>
                </Item>
            </View>
            <Button
                style={[styles.button, styles.margin]}
                onPress={() => addAccount({})}
            >
                <Text>Add Account</Text>
            </Button>
        </Container>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
    },
    button: {
        justifyContent: 'center',
        marginLeft: 20,
        paddingVertical: 30,
        backgroundColor: Colors.blue,
    },
    marginBottom: {
        marginBottom: 10,
    },
    margin: {
        marginHorizontal: 15,
    },
    padding: {
        paddingHorizontal: 20,
    },
    authSelection: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
    },
    authSelectionText: {
        color: 'blue',
    },
    error: {
        color: 'red',
        textAlign: 'center',
        marginVertical: 10,
    }
});

const mapStateToProps = (state) => {
    return {
        accounts: state.transfersReducer.accounts,
        currencies: state.settingsReducer.currencies,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addAccount: (account) => dispatch(addAccount(account)),
        removeAccount: (accountId) => dispatch(removeAccount(accountId)),
    };
};

export const AccountsScreen = connect(mapStateToProps, mapDispatchToProps)(AccountsScreenComponent);