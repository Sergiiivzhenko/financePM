import React from "react";
import {View} from "react-native";
import {connect} from 'react-redux';
import {Container} from "native-base";

import {DateFilters} from "../enums/DateFilters";
import {getIncomeOutcomeData} from "../utils/getIncomeOutcomeData";
import {DateTypePicker} from "../components/DateTypePicker";
import {DatesSelect} from "../components/DatesSelect";
import {PieChartWithPlaceholder} from "../components/PieChartWithPlaceholder";
import {dateFilters, defaultDate, useDateFilters} from "../utils/dateFilters";

export const IncomeOutcomeReportScreenComponent = ({transactions}) => {
    const {dateFilter, dates, onCategoryChangeHandler, onDateChange} = useDateFilters();
    const data = getIncomeOutcomeData(transactions, dateFilter, dates);
    const showDatePicker = dateFilter === DateFilters.SelectDates;
    return (
        <Container>
            <View>
                <DateTypePicker
                    dateFilter={dateFilter}
                    dateFilters={dateFilters}
                    onCategoryChangeHandler={onCategoryChangeHandler}
                />
                {showDatePicker && (
                    <DatesSelect
                        dates={dates}
                        defaultDate={defaultDate}
                        onDateChange={onDateChange}
                    />
                )}
                <PieChartWithPlaceholder data={data} />
            </View>
        </Container>
    );
}

const mapStateToProps = (state) => {
    return {
        transactions: state.transfersReducer.transactions,
    };
};

export const IncomeOutcomeReportScreen = connect(mapStateToProps, null)(IncomeOutcomeReportScreenComponent);