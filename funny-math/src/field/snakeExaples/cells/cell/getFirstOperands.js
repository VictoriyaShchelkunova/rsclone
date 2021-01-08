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



function getFirstOperands() {
    const operands = data.map(step => step.firstOperand);
    let result = [];
    for (let i = 0; i < 4; i++) {
        if (i % 2) {
            result.push([...operands.slice(0, 3)].reverse());
            operands.splice(0, 3);
            console.log(operands);
        } else {
            result.push([...operands.slice(0, 3)]);
            operands.splice(0, 3);
        }
    };

    result = result.flat(2);
    const firstOperands = [];
    let row = [0, 3, 6, 9];
    for (let k = 0; k < 3; k++) {
        for (let i = 0; i < 4; i++) {
            firstOperands.push(result[row[i]]);
        };
        row = row.map(operand => operand + 1);
    }
    return firstOperands;
}

export const firstOperands = getFirstOperands();