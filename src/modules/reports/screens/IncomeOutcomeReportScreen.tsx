import React from "react";
import {View} from "react-native";
import {PieChart} from 'react-native-svg-charts'
import {Text} from "react-native-svg";
import {connect} from 'react-redux';
import {Colors} from "../../common/constants/Colors";
import {CATEGORY} from "../../settings/utils/category.enum";

const getPieChartData = (transactions) => {
    const outcomeBalance = transactions.reduce((accumulator, current) => {
        if (current.type === CATEGORY.OUTCOME) {
            accumulator = accumulator + current.amount;
        }
        return accumulator;
    }, 0);
    const incomeBalance = transactions.reduce((accumulator, current) => {
        if (current.type === CATEGORY.INCOME) {
            accumulator = accumulator + current.amount;
        }
        return accumulator;
    }, 0);
    const outcomePercentage = outcomeBalance * 100 / (outcomeBalance + incomeBalance);
    const incomePercentage = incomeBalance * 100 / (outcomeBalance + incomeBalance);
    return [
        {
            amount: incomeBalance,
            value: incomePercentage,
            svg: {fill: Colors.green},
            key: CATEGORY.INCOME,
        },
        {
            amount: outcomeBalance,
            value: outcomePercentage,
            svg: {fill: Colors.red},
            key: CATEGORY.OUTCOME,
        },
    ];
}

const Labels = ({ slices, height, width }) => {
    return slices.map((slice, index) => {
        const {pieCentroid, data} = slice;
        return (
            <Text
                key={index}
                x={pieCentroid[ 0 ]}
                y={pieCentroid[ 1 ]}
                fill={'white'}
                textAnchor={'middle'}
                alignmentBaseline={'middle'}
                fontSize={24}
                stroke={'black'}
                strokeWidth={0.2}
            >
                {data.amount}
            </Text>
        )
    })
}

export const IncomeOutcomeReportScreenComponent = ({transactions}) => {
    const data = getPieChartData(transactions);
    return (
        <View>
            <PieChart style={{ height: 200 }} data={data}>
                <Labels />
            </PieChart>
        </View>
    );
}

const mapStateToProps = (state) => {
    return {
        transactions: state.transfersReducer.transactions,
    };
};

export const IncomeOutcomeReportScreen = connect(mapStateToProps, null)(IncomeOutcomeReportScreenComponent);