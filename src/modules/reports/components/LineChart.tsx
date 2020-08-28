import React from 'react'
import {Grid, LineChart as Chart, XAxis, YAxis} from 'react-native-svg-charts'
import {View} from 'react-native'

export const LineChart = () => {
    const data = [
        {label: 'Jan', value: 50},
        {label: 'Feb', value: 123},
        {label: 'Mar', value: 22},
        {label: 'Apr', value: 33},
        {label: 'May', value: 555},
        {label: 'Jun', value: 234},
        {label: 'Jul', value: 234},
        {label: 'Aug', value: 50},
        {label: 'Sep', value: 234},
        {label: 'Oct', value: 50},
        {label: 'Nov', value: 234},
        {label: 'Dec', value: 50},
    ];

    const axesSvg = {fontSize: 10, fill: 'grey'};
    const verticalContentInset = {top: 10, bottom: 10}
    const xAxisHeight = 30;
    return (
        <View style={{height: 400, padding: 20, flexDirection: 'row'}}>
            <YAxis
                data={data}
                style={{marginBottom: xAxisHeight}}
                contentInset={verticalContentInset}
                formatLabel={(item) => item}
                yAccessor={({item}) => item.value}
                svg={axesSvg}
            />
            <View style={{flex: 1, marginLeft: 10}}>
                <Chart
                    style={{flex: 1}}
                    data={data}
                    contentInset={verticalContentInset}
                    yAccessor={({item}) => item.value}
                    svg={{stroke: 'rgb(134, 65, 244)'}}
                >
                    <Grid/>
                </Chart>
                <XAxis
                    style={{marginHorizontal: -10, height: xAxisHeight}}
                    data={data}
                    contentInset={{left: 10, right: 10}}
                    formatLabel={(item) => item}
                    xAccessor={({item}) => item.label}
                    svg={axesSvg}
                />
            </View>
        </View>
    )
};

