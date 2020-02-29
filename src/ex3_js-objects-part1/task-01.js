function getObject() {
    let obj = {};
    obj.num = 5;
    obj.str = '243';
    obj.bool = false;
    delete obj.str;
}

module.exports = getObject;