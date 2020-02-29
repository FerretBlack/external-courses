function showArrayValues(arr) {
    let counterValues = [0, 0, 0];

    for (let counter = 0; counter < arr.length; ++counter) {
        if (arr[counter] === 0) {
            counterValues[2]++
        } else if (arr[counter] % 2 === 0 && arr[counter] !== null) {
            counterValues[0]++;
        } else if (arr[counter] % 2 !== 0 && arr[counter] !== null) {
            counterValues[1]++;
        }
    }
    console.log(counterValues);
    return counterValues;
}

module.exports = showArrayValues;