function reverseStr(str) {
    let reverseString = str.split("").reverse().join("");
    return reverseString;
}

module.exports = reverseStr;