import React from "react";
import {FlatList, StyleSheet, View} from "react-native";
import {connect} from 'react-redux';
import {removeAccount} from "../../transfers/redux/transfersActions";
import {Button, Text} from "native-base";
import {AccountCard} from "../../transfers/components/AccountCard";
import {removeCategory} from "../redux/settingsActions";
import {CategoryCard} from "../components/CategoryCard";

export const CategoriesScreenComponent = ({navigation, categories, removeCategory}) => {
    console.log(111111111, categories);
    return (
        <View style={styles.container}>
            <Button style={styles.button} onPress={() => navigation.navigate('AddAccount')}>
                <Text>Add Category</Text>
            </Button>
            <FlatList
                data={categories}
                renderItem={({item}) => <CategoryCard item={item} removeCategory={removeCategory} />}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
    },
    button: {
        marginTop: 10,
    }
});

const mapStateToProps = (state) => {
    console.log(222222222, state.settingsReducer);
    return {
        categories: state.settingsReducer.categories,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        removeCategory: (categoryId) => dispatch(removeCategory(categoryId)),
    };
};

export const CategoriesScreen = connect(mapStateToProps, mapDispatchToProps)(CategoriesScreenComponent);