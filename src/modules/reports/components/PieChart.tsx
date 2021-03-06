import React from "react";
import {Text as TextNative} from "native-base";
import {StyleSheet} from "react-native";
import {PieChart as Chart} from 'react-native-svg-charts'
import {Text} from "react-native-svg";

export const Labels = ({slices}: { slices?: any }) => {
    return slices.map((slice, index) => {
        const {pieCentroid, data} = slice;
        return (
            <Text
                key={index}
                x={pieCentroid[0]}
                y={pieCentroid[1]}
                fill={'black'}
                textAnchor={'middle'}
                alignmentBaseline={'middle'}
                fontSize={16}
                stroke={'black'}
                strokeWidth={0.2}
            >
                {data.amount}
            </Text>
        )
    })
}

// todo: add legend
export const PieChart = ({data}) => {
    if (!data || data.some(item => !item.amount)) {
        return <TextNative style={styles.placeholder}>No data available for selected period</TextNative>;
    }
    return (
        <Chart style={{height: 200, marginTop: 20}} data={data}>
            <Labels/>
        </Chart>
    );
}

const styles = StyleSheet.create({
    placeholder: {
        paddingHorizontal: 8,
    }
});