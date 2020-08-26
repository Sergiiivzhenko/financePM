import React from "react";
import {View} from "react-native";
import {connect} from 'react-redux';
import {Container} from "native-base";

import {DateFilters} from "../enums/DateFilters";
import {DateTypePicker} from "../components/DateTypePicker";
import {DatesSelect} from "../components/DatesSelect";
import {dateFilters, defaultDate, useDateFilters} from "../utils/dateFilters";
import {getIncomeCategoriesData} from "../utils/getIncomeCategoriesData";
import {BarChart} from "../components/BarChart";

export const IncomeCategoriesReportScreenComponent = ({transactions, categories}) => {
    const {dateFilter, dates, onCategoryChangeHandler, onDateChange} = useDateFilters();
    const data = getIncomeCategoriesData(transactions, categories, dateFilter, dates);
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
                <BarChart data={data} />
            </View>
        </Container>
    );
};

const mapStateToProps = (state) => {
    return {
        transactions: state.transfersReducer.transactions,
        categories: state.settingsReducer.categories,
    };
};

export const IncomeCategoriesReportScreen = connect(mapStateToProps, null)(IncomeCategoriesReportScreenComponent);