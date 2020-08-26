import React from "react";
import {StyleSheet, View} from "react-native";
import {BarChart as Chart} from 'react-native-svg-charts';
import {Text} from "react-native-svg";
import {Text as TextNative} from "native-base";
import {Colors} from "../../common/constants/Colors";

const Labels = ({x, y, bandwidth, data}) => (
    data.map((item, index) => (
        <Text
            key={index}
            x={x(0) + 10}
            y={y(index) + (bandwidth / 2)}
            fontSize={14}
            fill={'black'}
            alignmentBaseline={'middle'}
        >
            {`${item.label} (${item.value})`}
        </Text>
    ))
);

export const BarChart = ({data}) => {
    if (!data) {
        return <TextNative style={styles.placeholder}>No data available for selected period</TextNative>;
    }
    const contentInset = {top: 10, bottom: 10};
    return (
        <View style={{flexDirection: 'row', height: data.length * 50, paddingHorizontal: 10}}>
            <Chart
                style={{flex: 1}}
                data={data}
                yAccessor={({ item }) => item.value}
                svg={{ fill: Colors.green }}
                contentInset={contentInset}
                gridMin={0}
                horizontal={true}
            >
                <Labels />
            </Chart>
        </View>

    );
}

const styles = StyleSheet.create({
    placeholder: {
        paddingHorizontal: 8,
    }
});