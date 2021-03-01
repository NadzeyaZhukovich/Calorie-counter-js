// TODO: right now, this function calcualte part of the result, but it should calculate final result
// TODO: replace all errors to illegalArgumentError

class NullObjectPropertyError extends Error {
    constructor(message) {
        super(message);
        this.name = "IncorrectObjectPropertyValue";
    }
}

class NullObjectError extends Error {
    constructor(message) {
        super(message);
        this.name = "IncorrectObjectPropertyValue";
    }
}

class ZeroObjectPropertyError extends Error {
    constructor(message) {
        super(message);
        this.name = "IncorrectObjectPropertyValue";
    }
}


class LessZeroObjectPropertyError extends Error {
    constructor(message) {
        super(message);
        this.name = "LessZeroObjectPropertyError";
    }
}


const calculateWeightForMan = (data) => {
    if (data == null) {
        throw new NullObjectError("Data object should be non-null");
    } else if (data.weight === null || data.height === null || data.age === null) {
        throw new NullObjectPropertyError("Property of data object should be non-null");
    } else if (data.weight === 0 || data.height === 0 || data.age === 0) {
        throw new ZeroObjectPropertyError("Property of data object should be non-zero")
    } else if (data.weight < 0 || data.height < 0 || data.age < 0) {
        throw new LessZeroObjectPropertyError("Property of data object should be more than 0")
    }

    return (10 * data.weight) + (6.25 * data.height) - (5 * data.age) + 5;
}

// TODO: right now, this function calcualte part of the result, but it should calculate final result
// TODO: replace all errors to illegalArgumentError
const calculateWeightForWomen = (data) => {
    if (data == null) {
        throw new NullObjectError("Data object should be non-null");
    } else if (data.weight === null || data.height === null || data.age === null) {
        throw new NullObjectPropertyError("Property of data object should be non-null");
    } else if (data.weight === 0 || data.height === 0 || data.age === 0) {
        throw new ZeroObjectPropertyError("Property of data object should be non-zero")
    } else if (data.weight < 0 || data.height < 0 || data.age < 0) {
        throw new LessZeroObjectPropertyError("Property of data object should be more than 0")
    }

    return (10 * data.weight) + (6.25 * data.height) - (5 * data.age) - 161;
}

exports.calculateWeightForMan = calculateWeightForMan;
exports.calculateWeightForWomen = calculateWeightForWomen;
exports.NullObjectPropertyError = NullObjectPropertyError;
exports.NullObjectError = NullObjectError;
exports.ZeroObjectPropertyError = ZeroObjectPropertyError;
exports.LessZeroObjectPropertyError = LessZeroObjectPropertyError;