import React, {useState} from "react";
import {StyleSheet, TouchableOpacity, View, Modal} from "react-native";
import {Button, Text} from "native-base";
import {Entypo} from "@expo/vector-icons";
import {Colors} from "../../common/constants/Colors";

export const CategoryCard = ({item, removeCategory}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const {id, name} = item;
    const openModalHandler = () => setModalVisible(true);
    const onCloseModalHandler = () => setModalVisible(!modalVisible);
    const onRemoveHandler = () => removeCategory(id);
    return (
        <View style={styles.container}>
            <View style={styles.formItem}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalView}>
                            <View>
                                <Text>set category form</Text>
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
                <TouchableOpacity style={[styles.row, styles.info]} onPress={openModalHandler}>
                    <Text>{name}</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.close} onPress={onRemoveHandler}>
                <Entypo name='squared-cross' size={24} color={'red'} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginVertical: 10,
        justifyContent: 'space-between',
    },
    row: {
        flexDirection: 'row',
    },
    info: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    close: {
        width: 50,
        alignItems: 'center',
        alignSelf: 'center'
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
});
