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

const calculateWeight = (data) => {
    if (data == null 
        || (data.weight === null || data.height === null || data.age === null)
        || (data.weight === 0 || data.height === 0 || data.age === 0)
        || (data.weight < 0 || data.height < 0 || data.age < 0) 
    ) {
        throw new IllegalArgumentError("Argument is not correct");
    };
    
    let activityRatio = PhysicalActivityRatio[data.activity.toUpperCase()];
    let genderConstDiff = CaloriesFormulaConstant[data.gender.toUpperCase()];
    return Math.round(((10 * data.weight) + (6.25 * data.height) - (5 * data.age) + genderConstDiff) * activityRatio);
}

exports.calculateWeight = calculateWeight;
exports.IllegalArgumentError = IllegalArgumentError;