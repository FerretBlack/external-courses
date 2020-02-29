function getMaxValue (arr) {
    let maxValue = arr[0];

    for (let counter = 0; counter < arr.length; counter++) {
        if(maxValue < arr[counter]) {
            maxValue = arr[counter];
        }
    }
    console.log(maxValue)
    return maxValue;
}

module.exports = getMaxValue;