const defaultMonthData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

export const getMonthsData = ({transactions, type}) => {
    return transactions.reduce((accumulator, current) => {
        if (current.type === type) {
            const date = +current.id;
            const month = new Date(date).getMonth();
            accumulator[month] = accumulator[month] + current.amount;
        }
        return accumulator;
    }, defaultMonthData);
}