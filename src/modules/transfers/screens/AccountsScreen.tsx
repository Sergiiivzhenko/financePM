import React, {useCallback, useState} from "react";
import {View, StyleSheet, Picker, TouchableHighlight, Modal, Image} from "react-native";
import {connect} from 'react-redux';
import {addAccount, removeAccount} from "../redux/transfersActions";
import {Button, Text, Container, Input, Item, Label} from "native-base";
import {Colors} from "../../common/constants/Colors";
import {accountIcons} from "../utils/accountIcons";

export const AccountsScreenComponent = ({addAccount, currencies}) => {
    const [name, setName] = useState('');
    const [currency, setCurrency] = useState(currencies[0]);
    const [icon, setIcon] = useState(accountIcons[0]);
    const [modalVisible, setModalVisible] = useState(false);

    const openModalHandler = useCallback(() => setModalVisible(true), []);
    const onCloseModalHandler = useCallback(() => setModalVisible(!modalVisible), [modalVisible]);
    const renderAccountActions = accountIcons.map((accountIcon, index) => {
        const onSelectIconHandler = useCallback(() => {
            setIcon(accountIcon);
            setModalVisible(!modalVisible);
        }, [accountIcon, modalVisible]);
        return (
            <TouchableHighlight key={`${index}`} onPress={onSelectIconHandler}>
                <Image source={accountIcon} style={styles.modalIcon} resizeMode='contain' />
            </TouchableHighlight>
        )
    });
    const IconModal = () => (
        <View style={styles.formItem}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalView}>
                        <View style={styles.iconsContainer}>
                            {renderAccountActions}
                        </View>
                        <Button
                            style={[styles.button, styles.margin, styles.fullWidth]}
                            onPress={onCloseModalHandler}
                        >
                            <Text>Close</Text>
                        </Button>
                    </View>
                </View>
            </Modal>
            <TouchableHighlight
                onPress={openModalHandler}
            >
                <Image source={icon} style={styles.icon} resizeMode='contain'/>
            </TouchableHighlight>
        </View>
    );

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
                            <Picker.Item key={currency.name} label={currency.name} value={currency.name} />
                        ))}
                    </Picker>
                </View>
                <View style={[styles.marginBottom, styles.pickerContainer]}>
                    <Label style={styles.padding}>Icon</Label>
                    <IconModal />
                </View>
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
    fullWidth: {
        width: '100%',
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
    },
    pickerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    picker: {
        flex: 0.5,
    },
    formItem: {
        alignItems: "flex-end",
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    modalView: {
        margin: 10,
        backgroundColor: "white",
        borderRadius: 8,
        padding: 10,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    icon: {
        height: 30,
        width: 60,
    },
    modalIcon: {
        height: 100,
        width: 150,
        margin: 10,
    },
    iconsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
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