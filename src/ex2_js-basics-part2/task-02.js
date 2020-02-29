function showValues(arr) {
    for (let counter = 0; counter < arr.length; ++counter) {
        console.log(arr[counter]);
    }
    console.log("Количество элементов массива: " + arr.length);
    return undefined;
}

module.exports = showValues;