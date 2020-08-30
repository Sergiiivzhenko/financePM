import React from "react";
import {Text} from "native-base";
import {Image, StyleSheet, TouchableOpacity, View} from "react-native";
import {Entypo} from "@expo/vector-icons";
import {useNavigation} from '@react-navigation/native';

export const AccountCard = ({item, removeAccount}) => {
    const {id, name, icon, currency, balance} = item;
    const navigation = useNavigation();
    const onAccountPressHandler = () => navigation.navigate('EditAccount', {accountId: id});
    const onRemoveHandler = () => removeAccount(id);
    return (
        <View style={styles.container}>
            <TouchableOpacity style={[styles.row, styles.info]} onPress={onAccountPressHandler}>
                <View style={styles.row}>
                    <Image source={icon} style={styles.icon} resizeMode='contain'/>
                    <Text>{name}</Text>
                </View>
                <Text>{`${balance} ${currency.symbol}`}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.close} onPress={onRemoveHandler}>
                <Entypo name='circle-with-cross' size={24} color={'red'} />
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
    icon: {
        height: 30,
        width: 60,
    },
    close: {
        width: 50,
        alignItems: 'center',
        alignSelf: 'center'
    }
});
