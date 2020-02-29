function modifyObjKeys (str, obj) {
    if (obj.hasOwnProperty(str) === false) {
        let objCopy = obj;
        objCopy[str] = "new";
        return objCopy;
    }
    return false;
}

module.exports = modifyObjKeys;