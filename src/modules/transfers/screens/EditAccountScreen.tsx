import React, {useState} from "react";
import {View, StyleSheet, Picker} from "react-native";
import {connect} from 'react-redux';
import {useRoute} from '@react-navigation/native';
import {editAccount} from "../redux/transfersActions";
import {Button, Text, Container, Input, Item, Label} from "native-base";
import {Colors} from "../../common/constants/Colors";
import {IconsModal} from "../components/IconsModal";

export const EditAccountScreenComponent = ({editAccount, accounts, currencies, navigation}) => {
    const route = useRoute();
    // @ts-ignore
    const accountInStore = accounts.find(account => account.id === route.params.accountId);
    const [name, setName] = useState(accountInStore.name);
    const [currency, setCurrency] = useState(accountInStore.currency);
    const [icon, setIcon] = useState(accountInStore.icon);
    const onEditAccountHandler = () => {
        editAccount({...accountInStore, name, currency, icon});
        navigation.navigate('Accounts');
    };
    return (
        <Container style={styles.container}>
            <View style={styles.margin}>
                <Item style={styles.marginBottom} floatingLabel>
                    <Label style={styles.padding}>Name</Label>
                    <Input style={styles.padding} value={name} onChangeText={setName}/>
                </Item>
                <View style={[styles.marginBottom, styles.pickerContainer]}>
                    <Label style={styles.padding}>Currency</Label>
                    <Picker style={styles.picker} selectedValue={currency} onValueChange={setCurrency}>
                        {currencies.map(currency => (
                            <Picker.Item key={currency.name} label={currency.name} value={currency} />
                        ))}
                    </Picker>
                </View>
                <View style={[styles.marginBottom, styles.pickerContainer]}>
                    <Label style={styles.padding}>Icon</Label>
                    <IconsModal icon={icon} setIcon={setIcon} />
                </View>
            </View>
            <Button
                style={[styles.button, styles.margin]}
                onPress={onEditAccountHandler}
            >
                <Text>Edit Account</Text>
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
    pickerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    picker: {
        flex: 0.5,
    },
});

const mapStateToProps = (state) => {
    return {
        accounts: state.transfersReducer.accounts,
        currencies: state.settingsReducer.currencies,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        editAccount: (account) => dispatch(editAccount(account)),
    };
};

export const EditAccountScreen = connect(mapStateToProps, mapDispatchToProps)(EditAccountScreenComponent);
