function showValueType(value) {
    if ((typeof(value) === 'number' && Number.isNaN(value) === false) || (typeof(value) === 'string')) {
        return typeof(value);
    }
    return undefined;
}
module.exports = showValueType;