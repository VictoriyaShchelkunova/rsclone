export function getFirstOperands(data) {
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
