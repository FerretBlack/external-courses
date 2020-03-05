function searchString (parentStr, childStr) {
    if (parentStr.indexOf(childStr) !== -1) {
        return true;
    }
    return false;
}

module.exports = searchString;
