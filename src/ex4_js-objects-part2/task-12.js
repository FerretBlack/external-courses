function roundNumber (firstNum, secondNum) {
    let newNum = Number((firstNum + secondNum).toFixed(3));
    return newNum;
}

module.exports = roundNumber;
