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

let step = 0;
const userResult = 42;
const operand = data[step].firstOperand;
const operation = data[step].operation;


const results = data.map(step => step.firstOperand);
results.shift();


function checkResult(){
    if(userResult === data[step + 1].firstOperand){
        
    }
}