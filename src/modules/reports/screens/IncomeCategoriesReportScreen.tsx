import React from "react";
import {View} from "react-native";
import {connect} from 'react-redux';
import {Container} from "native-base";

import {DateFilters} from "../enums/DateFilters";
import {DateTypePicker} from "../components/DateTypePicker";
import {DatesSelect} from "../components/DatesSelect";
import {dateFilters, defaultDate, useDateFilters} from "../utils/dateFilters";
import {getCategoriesData} from "../utils/getCategoriesData";
import {BarChart} from "../components/BarChart";
import {CATEGORY} from "../../settings/utils/category.enum";

export const IncomeCategoriesReportScreenComponent = ({transactions, categories}) => {
    const {dateFilter, dates, onCategoryChangeHandler, onDateChange} = useDateFilters();
    const data = getCategoriesData({transactions, categories, dateFilter, dates, type: CATEGORY.INCOME});
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
                <BarChart data={data} type={CATEGORY.INCOME} />
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