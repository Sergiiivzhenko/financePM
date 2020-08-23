import React from "react";
import {Text as TextNative} from "native-base";
import {StyleSheet} from "react-native";
import {PieChart} from 'react-native-svg-charts'

import {Labels} from "./Labels";

export const PieChartWithPlaceholder = ({data}) => {
    if (data.some(item => !item.amount)) {
        return <TextNative style={styles.placeholder}>No data available for selected period</TextNative>;
    }
    return (
        <PieChart style={{height: 200, marginTop: 20}} data={data}>
            <Labels/>
        </PieChart>
    );
}

const styles = StyleSheet.create({
    placeholder: {
        paddingHorizontal: 8,
    }
});