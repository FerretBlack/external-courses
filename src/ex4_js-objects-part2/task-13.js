function getRandomNumber () {
    let randomNumber = Math.floor(Math.random() * (100 - 1) + 1);
    return randomNumber;
}

module.exports = getRandomNumber;