import React from "react";
import {View} from "react-native";
import {PieChart} from 'react-native-svg-charts'
import {Colors} from "../../common/constants/Colors";
import {CATEGORY} from "../../settings/utils/category.enum";

export const IncomeOutcomeReportScreen = () => {
    const data = [
        {
            value: 60,
            svg: {fill: Colors.green},
            key: CATEGORY.INCOME,
        },
        {
            value: 40,
            svg: {fill: Colors.red},
            key: CATEGORY.OUTCOME,
        },
    ]
    return (
        <View>
            <PieChart style={{ height: 200 }} data={data} />
        </View>
    );
}