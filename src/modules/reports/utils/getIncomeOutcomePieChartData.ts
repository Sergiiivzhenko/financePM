import {CATEGORY} from "../../settings/utils/category.enum";
import {Colors} from "../../common/constants/Colors";
import {calculateDateOffset} from "./calculateDateOffset";

export const getIncomeOutcomePieChartData = (transactions, category, dates) => {
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