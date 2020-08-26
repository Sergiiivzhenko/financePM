import {CATEGORY} from "../../settings/utils/category.enum";
import {calculateDateOffset} from "./calculateDateOffset";

export const getIncomeCategoriesData = (transactions, categories, dateFilter, dates) => {
    const {start, end} = calculateDateOffset(dateFilter, dates);
    const categoriesData = transactions.reduce((accumulator, current) => {
        const date = +current.id;
        if (current.type === CATEGORY.INCOME && date >= start && date <= end) {
            const {categoryId} = current;
            const {name} = categories.find(category => category.id === categoryId);
            accumulator[name] = accumulator[name] ? accumulator[name] + current.amount : current.amount;
        }
        return accumulator;
    }, {});
    return Object.keys(categoriesData).map(categoryName => {
       return {label: categoryName, value: categoriesData[categoryName]};
    });
}