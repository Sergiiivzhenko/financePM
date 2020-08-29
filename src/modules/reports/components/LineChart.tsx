import React from 'react';
import {Grid, LineChart as Chart, XAxis, YAxis} from 'react-native-svg-charts';
import {View} from 'react-native';
import {CATEGORY} from "../../settings/utils/category.enum";
import {Colors} from "../../common/constants/Colors";

export const LineChart = ({data, type}) => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const axesSvg = {fontSize: 10, fill: 'black'};
    const verticalContentInset = {top: 10, bottom: 10}
    const xAxisHeight = 30;
    const color = type === CATEGORY.INCOME ? Colors.green : Colors.red;
    return (
        <View style={{height: 400, padding: 20, flexDirection: 'row'}}>
            <YAxis
                data={data}
                style={{marginBottom: xAxisHeight}}
                contentInset={verticalContentInset}
                svg={axesSvg}
            />
            <View style={{flex: 1, marginLeft: 10}}>
                <Chart
                    style={{flex: 1}}
                    data={data}
                    contentInset={verticalContentInset}
                    svg={{stroke: color, strokeWidth: 2}}
                >
                    <Grid/>
                </Chart>
                <XAxis
                    style={{height: xAxisHeight}}
                    data={data}
                    contentInset={{left: 10, right: 10}}
                    formatLabel={item => months[item]}
                    svg={axesSvg}
                />
            </View>
        </View>
    )
};

