export const getOperations = (data) => {
    let verticalOperation = [];
    const horizontalOperation = [];
    for (let i = 0; i < data.length; i++) {
        if (i === 2 || i === 5 || i === 8) {
            horizontalOperation.push(data[i].operation);
        } else {
            verticalOperation.push(data[i].operation);
        }
    };
    const firstRow = [];
    const secondRow = [];

    for (let i = 0; i < verticalOperation.length; i++) {
        if (i === 0 || i === 3 || i === 4 || i === 7) {
            firstRow.push(verticalOperation[i]);
        } else {
            secondRow.push(verticalOperation[i]);
        }
    };
    verticalOperation = [...firstRow, ...secondRow];
    const secondOperation = horizontalOperation[1];
    const firstOperation = horizontalOperation[0];
    horizontalOperation[1] = firstOperation;
    horizontalOperation[0] = secondOperation;
    return {
        verticalOperation,
        horizontalOperation
    }
};

