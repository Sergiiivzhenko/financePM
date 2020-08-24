import {CATEGORY} from "../../settings/utils/category.enum";
import {Colors} from "../../common/constants/Colors";
import {calculateDateOffset} from "./calculateDateOffset";

export const getIncomeCategoriesData = (transactions, categories, dateFilter, dates) => {
    const {start, end} = calculateDateOffset(dateFilter, dates);
    const {outcomeBalance, incomeBalance} = transactions.reduce((accumulator, current) => {
        const date = +current.id;
        if (current.type === CATEGORY.INCOME && date >= start && date <= end) {
            const {categoryId} = current;
            accumulator[current.categoryId] = accumulator.incomeBalance + current.amount;
        }
        return accumulator;
    }, {});
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