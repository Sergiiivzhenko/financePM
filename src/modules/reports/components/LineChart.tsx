import React from 'react';
import {Grid, LineChart as Chart, XAxis, YAxis} from 'react-native-svg-charts';
import {View} from 'react-native';

export const LineChart = () => {
    const data = [50, 66, 344, 545, 55, 656, 56756, 6545, 34564, 44, 4, 456];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const axesSvg = {fontSize: 10, fill: 'grey'};
    const verticalContentInset = {top: 10, bottom: 10}
    const xAxisHeight = 30;
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
                    svg={{stroke: 'rgb(134, 65, 244)'}}
                >
                    <Grid/>
                </Chart>
                <XAxis
                    style={{marginHorizontal: -10, height: xAxisHeight}}
                    data={data}
                    contentInset={{left: 10, right: 10}}
                    formatLabel={item => months[item]}
                    svg={axesSvg}
                />
            </View>
        </View>
    )
};

