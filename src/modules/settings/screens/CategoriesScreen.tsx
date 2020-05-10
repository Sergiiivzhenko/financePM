import React, {useState} from "react";
import {FlatList, StyleSheet, View} from "react-native";
import {connect} from 'react-redux';
import {Accordion, Button, Text} from "native-base";
import {groupBy} from 'lodash';
import {removeCategory} from "../redux/settingsActions";
import {CategoryCard} from "../components/CategoryCard";
import {UpdateCategoryModal} from "../components/UpdateCategoryModal";
import {CATEGORY} from "../utils/category.enum";

export const CategoriesScreenComponent = ({categories, removeCategory}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [item, setItem] = useState(null);
    const openModalHandler = () => setModalVisible(true);
    const onCloseModalHandler = () => {
        setItem(null);
        setModalVisible(false);
    }
    const group = groupBy(categories, 'type');
    const accordionContent = [{
        title: CATEGORY.INCOME,
        content: group[CATEGORY.INCOME],
    }, {
        title: CATEGORY.OUTCOME,
        content: group[CATEGORY.OUTCOME],
    }];
    return (
        <View style={styles.container}>
            <UpdateCategoryModal
                item={item}
                setItem={setItem}
                modalVisible={modalVisible}
                onCloseModalHandler={onCloseModalHandler}
            />
            <Button style={styles.button} onPress={openModalHandler}>
                <Text>Add Category</Text>
            </Button>
            <Accordion
                dataArray={accordionContent}
                renderContent={({content}) => (
                    <FlatList
                        data={content}
                        renderItem={({item}) => (
                            <CategoryCard
                                item={item}
                                openModalHandler={openModalHandler}
                                removeCategory={removeCategory}
                                setItem={setItem}
                            />
                        )}
                    />
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingBottom: 60,
    },
    button: {
        marginTop: 10,
    }
});

const mapStateToProps = (state) => {
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