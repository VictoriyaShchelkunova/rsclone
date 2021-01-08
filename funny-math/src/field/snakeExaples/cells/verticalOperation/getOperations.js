// import { firstOperands } from "../cell/getFirstOperands";

const data = [
    {
        firstOperand: 49,
        operation: "- 7",
    },
    {
        firstOperand: 42,
        operation: ": 7",

    },
    {
        firstOperand: 6,
        operation: "x 10"

    },
    {
        firstOperand: 60,
        operation: "+ 21"

    },
    {
        firstOperand: 81,
        operation: "+ 19"

    },
    {
        firstOperand: 100,
        operation: "- 51"
    },
    {
        firstOperand: 49,
        operation: ": 7"
    },
    {
        firstOperand: 7,
        operation: "x 8"

    },
    {
        firstOperand: 56,
        operation: "- 20"
    },
    {
        firstOperand: 36,
        operation: ": 9"
    },
    {
        firstOperand: 4,
        operation: "x 7"
    },
    {
        firstOperand: 28,

    }
];

const getOperations = () => {
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

export const operations = getOperations();