import React, {useEffect, useState} from "react";
import {Modal, Picker, StyleSheet, View} from "react-native";
import {Button, Input, Item, Label, Text} from "native-base";
import {connect} from 'react-redux';

import {Colors} from "../../common/constants/Colors";
import {CATEGORY} from "../utils/category.enum";
import {addCategory, editCategory} from "../redux/settingsActions";

enum Action {
    Change = 'Change',
    Add = 'Add',
}

export const UpdateCategoryModalComponent = ({item, modalVisible, onCloseModalHandler, addCategory, editCategory}) => {
    const initialName = item ? item.name : '';
    const initialType = item ? item.type : CATEGORY.OUTCOME;
    const [name, setName] = useState(initialName);
    const [type, setType] = useState(initialType);
    useEffect(() => {
        setName(initialName);
        setType(initialType);
    }, [modalVisible]);
    const action = item ? Action.Change : Action.Add;
    const onActionHandler = () => {
        action === Action.Add ? addCategory({name, type}) : editCategory({...item, name, type});
        onCloseModalHandler();
    }
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalView}>
                    <View style={[styles.marginBottom, styles.inputsWrapper]}>
                        <Text uppercase style={[styles.title, styles.marginBottom]}>
                            {`${action} Category`}
                        </Text>
                        <Item style={styles.marginBottom}>
                            <Label style={styles.input}>Name</Label>
                            <Input style={styles.input} value={name} onChangeText={setName}/>
                        </Item>
                        <Item style={styles.marginBottom}>
                            <Label style={styles.input}>Type</Label>
                            <Picker
                                style={styles.picker}
                                selectedValue={type}
                                onValueChange={(type) => setType(type)}
                            >
                                {Object.keys(CATEGORY).map(key => (
                                    <Picker.Item key={CATEGORY[key]} label={CATEGORY[key]} value={CATEGORY[key]}/>
                                ))}
                            </Picker>
                        </Item>
                    </View>
                    <View style={[styles.row, styles.inputsWrapper]}>
                        <Button
                            style={[styles.button, styles.margin]}
                            onPress={onActionHandler}
                        >
                            <Text>{action}</Text>
                        </Button>
                        <Button
                            style={[styles.button, styles.margin]}
                            onPress={onCloseModalHandler}
                        >
                            <Text>Close</Text>
                        </Button>
                    </View>

                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
    },
    flexOne: {
        flex: 1,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    modalView: {
        margin: 10,
        backgroundColor: "white",
        borderRadius: 8,
        padding: 40,
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
    inputsWrapper: {
        width: '100%',
    },
    button: {
        flex: 1,
        justifyContent: 'center',
        paddingVertical: 30,
        backgroundColor: Colors.blue,
    },
    fullWidth: {
        width: '100%',
    },
    margin: {
        marginHorizontal: 10,
    },
    marginBottom: {
        marginBottom: 10,
    },
    input: {
        paddingHorizontal: 20,
        textAlign: 'center',
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
    },
    pickerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    picker: {
        flex: 1,
    },
});

const mapDispatchToProps = (dispatch) => {
    return {
        addCategory: (category) => dispatch(addCategory(category)),
        editCategory: (category) => dispatch(editCategory(category)),
    };
};

export const UpdateCategoryModal = connect(null, mapDispatchToProps)(UpdateCategoryModalComponent);
