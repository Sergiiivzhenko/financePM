import React from "react";
import {StyleSheet, View} from "react-native";
import {DatePicker, Text as TextNative} from "native-base";

export const DatesSelect = ({defaultDate, dates, onDateChange}) => (
    <View style={styles.datesContainer}>
        <View>
            <TextNative>From</TextNative>
            <DatePicker
                defaultDate={defaultDate}
                maximumDate={dates.end}
                animationType={"fade"}
                androidMode={"default"}
                placeHolderText="Select start date"
                textStyle={{padding: 0}}
                placeHolderTextStyle={{color: "#d3d3d3", padding: 0}}
                onDateChange={(value) => onDateChange(value, 'start')}
            />
        </View>
        <View>
            <TextNative>To</TextNative>
            <DatePicker
                defaultDate={defaultDate}
                minimumDate={dates.start}
                animationType={"fade"}
                androidMode={"default"}
                placeHolderText="Select end date"
                textStyle={{padding: 0}}
                placeHolderTextStyle={{color: "#d3d3d3", padding: 0}}
                onDateChange={(value) => onDateChange(value, 'end')}
            />
        </View>
    </View>
);

const styles = StyleSheet.create({
    datesContainer: {
        paddingHorizontal: 8,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});