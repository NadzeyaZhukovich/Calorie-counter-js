const { IllegalArgumentError } = require('./errors/errors.js');
const { WeightOutput } = require('./models/weight-output.js');

class WeightCalculator {
    static #PhysicalActivityRatio = {
        MIN: 1.2,
        LOW: 1.375,
        MEDIUM: 1.55,
        HIGH: 1.725,
        MAX: 1.9,
    };

    static #CaloriesFormulaConstant = {
        MALE: 5,
        FEMALE: -161
    };

    static #WeightCoefficients = {
        PUT: 1.15,
        LOSE: 0.85,
    }

    calculateWeight(data) {
        const baseWeight = WeightCalculator.#calculateBaseWeight(data);
        return new WeightOutput(
            WeightCalculator.#calculateNormalWeight(baseWeight),
            WeightCalculator.#calculateLostWeight(baseWeight),
            WeightCalculator.#calculatePutWeight(baseWeight)
        )
    }

    static #calculateBaseWeight(data) {
        if (data == null
            || (data.weight === null || data.height === null || data.age === null)
            || (data.weight <= 0 || data.height <= 0 || data.age <= 0)
        ) {
            throw new IllegalArgumentError("Argument is not correct");
        }

        let activityRatio = WeightCalculator.#PhysicalActivityRatio[data.activity.toUpperCase()];
        let genderConstDiff = WeightCalculator.#CaloriesFormulaConstant[data.gender.toUpperCase()];
        return ((10 * data.weight) + (6.25 * data.height) - (5 * data.age) + genderConstDiff) * activityRatio;
    }

    static #calculateNormalWeight(baseWeight) {
        return Math.round(baseWeight);
    }

    static #calculateLostWeight(baseWeight) {
        return Math.round(baseWeight * this.#WeightCoefficients.LOSE);
    }

    static #calculatePutWeight(baseWeight) {
        return Math.round(baseWeight * this.#WeightCoefficients.PUT);
    }
}

exports.WeightCalculator = WeightCalculator;
