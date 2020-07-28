import React, {useState} from "react";
import {Picker, StyleSheet, View} from "react-native";
import {PieChart} from 'react-native-svg-charts'
import {connect} from 'react-redux';
import {Container, DatePicker, Text as TextNative} from "native-base";

import {DateFilters} from "../enums/DateFilters";
import {Labels} from "../components/Labels";
import {getIncomeOutcomePieChartData} from "../utils/getIncomeOutcomePieChartData";

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
    const showNoDataPlaceholder = data.some(item => !item.amount);
    return (
        <Container>
            <View>
                <Picker style={styles.picker} selectedValue={dateFilter} onValueChange={onCategoryChangeHandler}>
                    {dateFilters.map(value => (
                        <Picker.Item key={value} label={value} value={value}/>
                    ))}
                </Picker>
                {showDatePicker && (
                    <View style={styles.datesContainer}>
                        <View>
                            <TextNative>From</TextNative>
                            <DatePicker
                                defaultDate={defaultDate}
                                maximumDate={dates.end}
                                locale={"en"}
                                timeZoneOffsetInMinutes={undefined}
                                modalTransparent={false}
                                animationType={"fade"}
                                androidMode={"default"}
                                placeHolderText="Select start date"
                                textStyle={{padding: 0}}
                                placeHolderTextStyle={{ color: "#d3d3d3", padding: 0 }}
                                onDateChange={(value) => onDateChange(value, 'start')}
                                disabled={false}
                            />
                        </View>
                        <View>
                            <TextNative>To</TextNative>
                            <DatePicker
                                defaultDate={defaultDate}
                                minimumDate={dates.start}
                                locale={"en"}
                                timeZoneOffsetInMinutes={undefined}
                                modalTransparent={false}
                                animationType={"fade"}
                                androidMode={"default"}
                                placeHolderText="Select end date"
                                textStyle={{padding: 0}}
                                placeHolderTextStyle={{ color: "#d3d3d3", padding: 0 }}
                                onDateChange={(value) => onDateChange(value, 'end')}
                                disabled={false}
                            />
                        </View>
                    </View>
                )}
                {showNoDataPlaceholder
                    ? <TextNative style={styles.placeholder}>No data available for selected period</TextNative>
                    : (
                        <PieChart style={{height: 200, marginTop: 20}} data={data}>
                            <Labels/>
                        </PieChart>
                    )
                }
            </View>
        </Container>
    );
}

const mapStateToProps = (state) => {
    return {
        transactions: state.transfersReducer.transactions,
    };
};

const styles = StyleSheet.create({
    picker: {
        paddingTop: 40,
        flex: 1,
    },
    datesContainer: {
        paddingHorizontal: 8,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    placeholder: {
        paddingHorizontal: 8,
    }
});

export const IncomeOutcomeReportScreen = connect(mapStateToProps, null)(IncomeOutcomeReportScreenComponent);