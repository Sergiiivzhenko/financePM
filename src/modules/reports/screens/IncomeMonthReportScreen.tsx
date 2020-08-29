import React from "react";
import {View} from "react-native";
import {connect} from 'react-redux';
import {Container} from "native-base";

import {CATEGORY} from "../../settings/utils/category.enum";
import {LineChart} from "../components/LineChart";
import {getMonthsData} from "../utils/getMonthsData";

export const IncomeMonthReportScreenComponent = ({transactions}) => {
    const data = getMonthsData({transactions, type: CATEGORY.INCOME});
    return (
        <Container>
            <View>
                <LineChart data={data} type={CATEGORY.INCOME} />
            </View>
        </Container>
    );
};

const mapStateToProps = (state) => {
    return {
        transactions: state.transfersReducer.transactions,
    };
};

export const IncomeMonthReportScreen = connect(mapStateToProps, null)(IncomeMonthReportScreenComponent);