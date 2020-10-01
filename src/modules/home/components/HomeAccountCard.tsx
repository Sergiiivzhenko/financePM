import React from "react";
import {Button, Text} from "native-base";
import {Image, StyleSheet, View} from "react-native";
import {useNavigation} from '@react-navigation/native';
import {CATEGORY} from "../../settings/utils/category.enum";

export const HomeAccountCard = ({item}) => {
    const navigation = useNavigation();
    const {id, name, icon, currency, balance} = item;
    const onAddIncomeHandler = () => navigation.navigate(
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
    const onAddOutcomeHandler = () => navigation.navigate(
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
            <View style={styles.info}>
                <View style={styles.info}>
                    <Image source={icon} style={styles.icon} resizeMode='contain'/>
                    <Text>{name}</Text>
                    <Text>{`${balance} ${currency.symbol}`}</Text>
                </View>
                <View style={styles.buttonsContainer}>
                    <View style={styles.accountActionContainer}>
                        <Button style={styles.accountActionButton} onPress={onAddIncomeHandler}>
                            <Text>+</Text>
                        </Button>
                        <Button style={styles.accountActionButton} onPress={onAddOutcomeHandler}>
                            <Text>-</Text>
                        </Button>
                    </View>
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
    info: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    icon: {
        height: 30,
        width: 60,
    },
    buttonsContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    accountActionContainer: {
        flexDirection: 'row',
    },
    accountActionButton: {
        marginLeft: 5,
        height: 30,
    }
});
