import React, {useState} from "react";
import {View} from "react-native";
import {connect} from 'react-redux';
import {Container} from "native-base";

import {DateFilters} from "../enums/DateFilters";
import {getIncomeOutcomePieChartData} from "../utils/getIncomeOutcomePieChartData";
import {DateTypePicker} from "../components/DateTypePicker";
import {DatesSelect} from "../components/DatesSelect";
import {PieChartWithPlaceholder} from "../components/PieChartWithPlaceholder";

const defaultDate = new Date();
const dateFilters = Object.keys(DateFilters).map(key => DateFilters[key]);

export const IncomeOutcomeReportScreenComponent = ({transactions}) => {
    const [dateFilter, setDateFilter] = useState(dateFilters[0]);
    const [dates, setDates] = useState({start: defaultDate, end: defaultDate});
    const onCategoryChangeHandler = (value) => {
        setDates({start: defaultDate, end: defaultDate});
        setDateFilter(value);
    };
    const onDateChange = (value, type) => {
        setDates({...dates, [type]: value});
    };
    const data = getIncomeOutcomePieChartData(transactions, dateFilter, dates);
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