import React, {useState} from "react";
import {Picker, StyleSheet, View} from "react-native";
import {PieChart} from 'react-native-svg-charts'
import {Text} from "react-native-svg";
import {connect} from 'react-redux';
import {Container, DatePicker, Text as TextNative} from "native-base";
import {Colors} from "../../common/constants/Colors";
import {CATEGORY} from "../../settings/utils/category.enum";
import {DateFilters} from "../enums/DateFilters";

const defaultDate = new Date();
const dateFilters = Object.keys(DateFilters).map(key => DateFilters[key]);
const yearInMilliseconds = 31536000000;

type DateValues = {
    start: Date;
    end: Date;
};

type DateFilter = {
    start: number;
    end: number;
};

const calculateDateOffset = (category: DateFilters, dates?: DateValues): DateFilter => {
    const defaultDate = new Date().getTime();
    switch (category) {
        case DateFilters.LastYear: {
            const start = defaultDate - yearInMilliseconds;
            return {start, end: defaultDate};
        }
        case DateFilters.LastMonth: {
            const startDate = new Date();
            const start = startDate.setMonth(startDate.getMonth()-1);
            return {start: start, end: defaultDate};
        }
        case DateFilters.SelectDates: {
            const {start, end} = dates;
            return {start: start.getTime(), end: end.getTime()};
        }
    }
}

const getPieChartData = (transactions, category, dates) => {
    const {start, end} = calculateDateOffset(category, dates);
    const {outcomeBalance, incomeBalance} = transactions.reduce((accumulator, current) => {
        const date = +current.id;
        if (current.type === CATEGORY.OUTCOME && date >= start && date <= end) {
            accumulator.outcomeBalance = accumulator.outcomeBalance + current.amount;
        }
        if (current.type === CATEGORY.INCOME && date >= start && date <= end) {
            accumulator.incomeBalance = accumulator.incomeBalance + current.amount;
        }
        return accumulator;
    }, {outcomeBalance: 0, incomeBalance: 0});
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

const Labels = ({ slices }: { slices?: any}) => {
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
                fontSize={18}
                stroke={'black'}
                strokeWidth={0.2}
            >
                {data.amount}
            </Text>
        )
    })
}

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
    const data = getPieChartData(transactions, dateFilter, dates);
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