import React from "react";
import {StyleSheet, TouchableOpacity, View} from "react-native";
import {Entypo} from "@expo/vector-icons";
import {Text} from "native-base";

export const CategoryCard = ({item, setItem, openModalHandler, removeCategory}) => {
    const {id, name} = item;
    const onPressHandler = () => {
        setItem(item);
        openModalHandler();
    }
    const onRemoveHandler = () => removeCategory(id);
    return (
        <View style={styles.container}>
            <View style={styles.flexOne}>
                <TouchableOpacity style={styles.flexOne} onPress={onPressHandler}>
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
    flexOne: {
        flex: 1
    },
    container: {
        flexDirection: 'row',
        marginVertical: 10,
        marginLeft: 20,
        justifyContent: 'space-between',
    },
    close: {
        width: 50,
        alignItems: 'center',
        alignSelf: 'center'
    },
});
