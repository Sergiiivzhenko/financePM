import React, {useCallback, useState} from "react";
import {Image, Modal, StyleSheet, TouchableHighlight, View} from "react-native";
import {Button, Text} from "native-base";
import {accountIcons} from "../utils/accountIcons";
import {Colors} from "../../common/constants/Colors";

export const IconsModal = ({icon, setIcon}) => {
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

    return (
        <View style={styles.formItem}>
            <Modal
                animationType="fade"
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
}

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        marginLeft: 20,
        paddingVertical: 30,
        backgroundColor: Colors.blue,
    },
    fullWidth: {
        width: '100%',
    },
    margin: {
        marginHorizontal: 15,
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