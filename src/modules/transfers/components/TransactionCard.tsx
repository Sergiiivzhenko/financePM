import React from "react";
import {Text} from "native-base";
import {Image, StyleSheet, TouchableOpacity, View} from "react-native";
import {connect} from 'react-redux';
import {Entypo} from "@expo/vector-icons";
import {useNavigation} from '@react-navigation/native';
import {CATEGORY} from "../../settings/utils/category.enum";

export const TransactionCardComponent = ({item, removeTransaction, categories, accounts}) => {
    const {id, type, accountId, categoryId, amount, debt, description} = item;
    const navigation = useNavigation();
    const onCardPressHandler = () => navigation.navigate('EditTransaction', {id});
    const onRemoveHandler = () => removeTransaction(id);
    const category = categories.find(category => category.id === categoryId);
    const sign = type === CATEGORY.OUTCOME ? '-' : '';
    const categoryName = !debt ? category.name : 'debt';
    const account = accounts.find(account => account.id === accountId);
    const {icon, currency} = account;
    return (
        <View style={styles.container}>
            <TouchableOpacity style={[styles.row, styles.info]} onPress={onCardPressHandler}>
                <Image source={icon} style={styles.icon} resizeMode='contain'/>
                <Text>{categoryName.substring(0, 9)}</Text>
                <Text>{description.substring(0, 9)}</Text>
                <Text>{`${sign}${amount}${currency.symbol}`}</Text>
            </TouchableOpacity>
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

const mapStateToProps = (state) => {
    return {
        categories: state.settingsReducer.categories,
        accounts: state.transfersReducer.accounts,
    };
};

export const TransactionCard = connect(mapStateToProps, null)(TransactionCardComponent);
