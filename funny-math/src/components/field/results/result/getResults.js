export function shuffle(data) {
    const results = data.map(step => step.firstOperand);
    results.shift();
    return results.sort(() => Math.random() - 0.5);
}
