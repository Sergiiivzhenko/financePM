import React from "react";
import {Text} from "native-base";
import {Image, StyleSheet, TouchableOpacity, View} from "react-native";
import {Entypo} from "@expo/vector-icons";
import {useNavigation} from '@react-navigation/native';
import {CATEGORY} from "../../settings/utils/category.enum";

export const HomeAccountCard = ({item}) => {
    const navigation = useNavigation();
    const {id, name, icon, currency, balance} = item;
    const onPlusPressHandler = () => navigation.navigate(
        'Transfers',
        {
            screen: 'AddTransaction',
            params: {
                accountId: id,
                type: CATEGORY.INCOME,
                backRoute: 'Home',
            }
        }
    );
    const onMinusPressHandler = () => navigation.navigate(
        'Transfers',
        {
            screen: 'AddTransaction',
            params: {
                accountId: id,
                type: CATEGORY.OUTCOME,
                backRoute: 'Home',
            }
        }
    );
    return (
        <View style={styles.container}>
            <View style={[styles.row, styles.info]}>
                <View style={styles.row}>
                    <Image source={icon} style={styles.icon} resizeMode='contain'/>
                    <Text>{name}</Text>
                </View>
                <View style={styles.buttonsContainer}>
                    <Text>{`${balance} ${currency.symbol}`}</Text>
                    <TouchableOpacity style={styles.action} onPress={onPlusPressHandler}>
                        <Entypo name='squared-plus' size={30} color={'blue'} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.action} onPress={onMinusPressHandler}>
                        <Entypo name='squared-minus' size={30} color={'blue'} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 10,
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
    action: {
        width: 40,
        alignItems: 'center',
        alignSelf: 'center'
    },
    button: {
        margin: 5,
        justifyContent: 'center',
    },
    buttonsContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: "space-between",
    }
});
