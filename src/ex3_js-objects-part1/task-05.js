function copyObj(obj) {
    let objCopy = Object.assign({}, obj);
    return objCopy;
}

module.exports = copyObj;