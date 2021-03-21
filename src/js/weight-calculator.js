class IllegalArgumentError extends Error {
    constructor(message) {
        super(message);
        this.name = "IllegalArgumentError"
    }
};

const PhysicalActivityRatio = {
    MIN: 1.2,
    LOW: 1.375,
    MEDIUM: 1.55,
    HIGH: 1.725,
    MAX: 1.9,
};

const CaloriesFormulaConstant = {
    MALE: 5,
    FEMALE: -161
};

const WeightCoefficients = {
    PUT: 1.15,
    LOSE: 0.85,
}

function calculateWeight(data) {
    if (data == null 
        || (data.weight === null || data.height === null || data.age === null)
        || (data.weight <= 0 || data.height <= 0 || data.age <= 0) 
    ) {
        throw new IllegalArgumentError("Argument is not correct");
    };
    
    let activityRatio = PhysicalActivityRatio[data.activity.toUpperCase()];
    let genderConstDiff = CaloriesFormulaConstant[data.gender.toUpperCase()];
    return ((10 * data.weight) + (6.25 * data.height) - (5 * data.age) + genderConstDiff) * activityRatio;
}

function normWeight(data) {
    return Math.round(calculateWeight(data));
}

function loseWeight(data) {
    return Math.round(calculateWeight(data) * WeightCoefficients.LOSE);
}

function putWeight(data) {
    return Math.round(calculateWeight(data) * WeightCoefficients.PUT);
}

exports.normWeight = normWeight;
exports.loseWeight = loseWeight;
exports.putWeight = putWeight;
exports.IllegalArgumentError = IllegalArgumentError;