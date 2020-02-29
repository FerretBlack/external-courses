function compareArrayValues(arr) {
    for (let i = 0; i < arr.length; ++i) {
        for (let k = i++; k < arr.length; ++k) {
            if (arr[i] !== arr[k]) {
                console.log(false);
                return false
            }
        }
    }
    console.log(true);
    return true
}

module.exports = compareArrayValues;