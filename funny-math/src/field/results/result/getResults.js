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

const results = data.map(step => step.firstOperand);
results.shift();

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }
 export const shuffleResults = shuffle(results);