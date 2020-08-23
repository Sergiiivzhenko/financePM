import React from "react";
import {Picker, StyleSheet} from "react-native";

export const DateTypePicker = ({dateFilter, dateFilters, onCategoryChangeHandler}) => (
    <Picker style={styles.picker} selectedValue={dateFilter} onValueChange={onCategoryChangeHandler}>
        {dateFilters.map(value => (
            <Picker.Item key={value} label={value} value={value}/>
        ))}
    </Picker>
);

const styles = StyleSheet.create({
    picker: {
        paddingTop: 40,
        flex: 1,
    },
});