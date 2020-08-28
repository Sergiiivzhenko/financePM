import {calculateDateOffset} from "./calculateDateOffset";

export const getCategoriesData = ({transactions, categories, dateFilter, dates, type}) => {
    const {start, end} = calculateDateOffset(dateFilter, dates);
    const categoriesData = transactions.reduce((accumulator, current) => {
        const date = +current.id;
        if (current.type === type && date >= start && date <= end) {
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