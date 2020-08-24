import {DateFilters} from "../enums/DateFilters";
import {useState} from "react";

export const defaultDate = new Date();
export const dateFilters = Object.keys(DateFilters).map(key => DateFilters[key]);

export const useDateFilters = () => {
    const [dateFilter, setDateFilter] = useState(dateFilters[0]);
    const [dates, setDates] = useState({start: defaultDate, end: defaultDate});
    const onCategoryChangeHandler = (value) => {
        setDates({start: defaultDate, end: defaultDate});
        setDateFilter(value);
    };
    const onDateChange = (value, type) => {
        setDates({...dates, [type]: value});
    };
    return {dateFilter, dates, onCategoryChangeHandler, onDateChange};
}