import React from "react";
import {View} from "react-native";
import {connect} from 'react-redux';
import {Container} from "native-base";

import {CATEGORY} from "../../settings/utils/category.enum";
import {LineChart} from "../components/LineChart";
import {getMonthsData} from "../utils/getMonthsData";

export const OutcomeMonthReportScreenComponent = ({transactions}) => {
    const data = getMonthsData({transactions, type: CATEGORY.OUTCOME});
    return (
        <Container>
            <View>
                <LineChart data={data} type={CATEGORY.OUTCOME} />
            </View>
        </Container>
    );
};

const mapStateToProps = (state) => {
    return {
        transactions: state.transfersReducer.transactions,
    };
};

export const OutcomeMonthReportScreen = connect(mapStateToProps, null)(OutcomeMonthReportScreenComponent);