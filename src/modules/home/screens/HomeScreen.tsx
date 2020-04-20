import React from "react";
import {StyleSheet, ScrollView, View} from "react-native";
import {Button, Text} from "native-base";
import {connect} from 'react-redux';
import Constants from 'expo-constants';
import {HomeAccountCard} from "../components/HomeAccountCard";

const HomeScreenComponent = ({accounts, navigation}) => {
    return (
        <ScrollView style={styles.container}>
            <Button style={styles.addAccountButton} onPress={() => navigation.navigate('AddAccount')}>
                <Text>Add Account</Text>
            </Button>
            <View style={styles.list}>
                {accounts.map(item => <HomeAccountCard key={item.id} item={item} />)}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight + 10,
    },
    addAccountButton: {
        margin: 5,
    },
    list: {
        flex: 1,
        flexWrap: 'wrap',
    },

});

const mapStateToProps = (state) => {
    return {
        accounts: state.transfersReducer.accounts,
    };
};

export const HomeScreen = connect(mapStateToProps, null)(HomeScreenComponent);