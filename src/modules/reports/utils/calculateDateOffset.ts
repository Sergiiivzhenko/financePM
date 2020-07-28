import {DateFilters} from "../enums/DateFilters";

type DateValues = {
    start: Date;
    end: Date;
};

type DateFilter = {
    start: number;
    end: number;
};

const yearInMilliseconds = 31536000000;

export const calculateDateOffset = (category: DateFilters, dates?: DateValues): DateFilter => {
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