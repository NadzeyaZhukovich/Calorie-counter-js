const { it } = require('@jest/globals');
const { WeightCalculator } = require('../src/js/weight-calculator.js');
const { WeightOutput } = require('../src/js/models/weight-output');
const { IllegalArgumentError } = require('../src/js/errors/errors.js');

describe('calculateWeightForMan', () => {
  const weightCalculator = new WeightCalculator();

  it('returns correct result when data is filled and all values more than 0 and activity is minimal', () => {
    const expectedResult = new WeightOutput(1356, 1153, 1559);
    const data = {
      weight: 100,
      height: 100,
      age: 100,
      gender: 'male',
      activity: 'min',
    };

    expect(weightCalculator.calculateWeight(data))
      .toStrictEqual(expectedResult);
  });

  it('returns correct result when data is filled and all values more than 0 and activity is low', () => {
    const expectedResult = new WeightOutput(162, 137, 186);
    const data = {
      weight: 10,
      height: 10,
      age: 10,
      gender: 'male',
      activity: 'low',
    };

    expect(weightCalculator.calculateWeight(data))
      .toStrictEqual(expectedResult);
  });

  it('returns correct result when data is filled and all values more than 0 and activity is medium', () => {
    const expectedResult = new WeightOutput(2352, 1999, 2705);
    const data = {
      weight: 60,
      height: 170,
      age: 30,
      gender: 'male',
      activity: 'medium',
    };

    expect(weightCalculator.calculateWeight(data))
        .toStrictEqual(expectedResult);
  });

  it('returns correct result when data is filled and all values more than 0 and activity is high', () => {
    const expectedResult = new WeightOutput(2521, 2143, 2899);
    const data = {
      weight: 55,
      height: 177,
      age: 40,
      gender: 'male',
      activity: 'high',
    };

    expect(weightCalculator.calculateWeight(data))
      .toStrictEqual(expectedResult);
  });

  it('returns correct result when data is filled and all values more than 0 and activity is max', () => {
    const expectedResult = new WeightOutput(2670, 2269, 3070);
    const data = {
      weight: 50,
      height: 160,
      age: 20,
      gender: 'male',
      activity: 'max',
    };

    expect(weightCalculator.calculateWeight(data))
      .toStrictEqual(expectedResult);
  });

  it('throws IllegalArgumentError when data is empty', () => {
    expect(() => { weightCalculator.calculateWeight(null)})
      .toThrow(IllegalArgumentError);
  });

  it('throws IllegalArgumentError when data.weight is null', () => {
    const data = {
      weight: null,
      height: 100,
      age: 100,
      gender: 'male',
      activity: 'min',
    };
    expect(() => weightCalculator.calculateWeight(data))
      .toThrow(IllegalArgumentError);
  });

  it('throws IllegalArgumentError when data.height is null', () => {
    const data = {
      weight: 100,
      height: null,
      age: 100,
      gender: 'male',
      activity: 'min',
    };
    expect(() => weightCalculator.calculateWeight(data))
      .toThrow(IllegalArgumentError);
  });

  it('throws IllegalArgumentError when data.age is null', () => {
    const data = {
      weight: 100,
      height: 100,
      age: null,
      gender: 'male',
      activity: 'min',
    };
    expect(() => weightCalculator.calculateWeight(data))
      .toThrow(IllegalArgumentError);
  });

  it('throws IllegalArgumentError when data.weight is 0', () => {
    const data = {
      weight: 0,
      height: 100,
      age: 10,
      gender: 'male',
      activity: 'min',
    };
    expect(() => weightCalculator.calculateWeight(data))
      .toThrow(IllegalArgumentError);
  })

  it('throws IllegalArgumentError when data.height is 0', () => {
    const data = {
      weight: 100,
      height: 0,
      age: 10,
      gender: 'male',
      activity: 'min',
};
    expect(() => weightCalculator.calculateWeight(data))
      .toThrow(IllegalArgumentError);
  })

  it('throws IllegalArgumentError when data.age is 0', () => {
    const data = {
      weight: 100,
      height: 100,
      age: 0,
      gender: 'male',
      activity: 'min',
    };
    expect(() => weightCalculator.calculateWeight(data))
      .toThrow(IllegalArgumentError);
  })

  it('throws IllegalArgumentError when data.height is -1', () => {
    const data = {
      weight: -1,
      height: 100,
      age: 10,
      gender: 'male',
      activity: 'min',
    };
    expect(() => weightCalculator.calculateWeight(data))
      .toThrow(IllegalArgumentError);
  })

  it('throws IllegalArgumentError when data.weight is -1', () => {
    const data = {
      weight: 100,
      height: -1,
      age: 10,
      gender: 'male',
      activity: 'min',
    };
    expect(() => weightCalculator.calculateWeight(data))
      .toThrow(IllegalArgumentError);
  })

  it('throws IllegalArgumentError when data.age is -1', () => {
    const data = {
      weight: 100,
      height: 100,
      age: -1,
      gender: 'male',
      activity: 'min',
    };
    expect(() => weightCalculator.calculateWeight(data))
      .toThrow(IllegalArgumentError);
  })
})

describe('calculateWeightForWomen', () => {
  const weightCalculator = new WeightCalculator();

  it('returns correct result when data is filled and all values more than 0 and activity is minimal', () => {
    const expectedResult = new WeightOutput(1157, 983, 1330);
    const data = {
      weight: 100,
      height: 100,
      age: 100,
      gender: 'female',
      activity: 'min',
    };

    expect(weightCalculator.calculateWeight(data))
        .toStrictEqual(expectedResult);
  });

  it('returns correct result when data is filled and all values more than 0 and activity is low', () => {
    const expectedResult = new WeightOutput(1411, 1200, 1623);
    const data = {
      weight: 50,
      height: 150,
      age: 50,
      gender: 'female',
      activity: 'low',
    };

    expect(weightCalculator.calculateWeight(data))
        .toStrictEqual(expectedResult);
  });

  it('returns correct result when data is filled and all values more than 0 and activity is medium', () => {
    const expectedResult = new WeightOutput(2095, 1781, 2409);
    const data = {
      weight: 60,
      height: 170,
      age: 30,
      gender: 'female',
      activity: 'medium',
    };

    expect(weightCalculator.calculateWeight(data))
        .toStrictEqual(expectedResult);
  });

  it('returns correct result when data is filled and all values more than 0 and activity is high', () => {
    const expectedResult = new WeightOutput(2234, 1899, 2569);
    const data = {
      weight: 55,
      height: 177,
      age: 40,
      gender: 'female',
      activity: 'high',
    };

    expect(weightCalculator.calculateWeight(data))
        .toStrictEqual(expectedResult);
  });

  it('returns correct result when data is filled and all values more than 0 and activity is max', () => {
  const expectedResult = new WeightOutput(2354, 2001, 2707);
    const data = {
      weight: 50,
      height: 160,
      age: 20,
      gender: 'female',
      activity: 'max',
    };

    expect(weightCalculator.calculateWeight(data))
        .toStrictEqual(expectedResult);
  });

  it('throws IllegalArgumentError when data is empty', () => {
    expect(() => { weightCalculator.calculateWeight(null)})
      .toThrow(IllegalArgumentError);
  });

  it('throws IllegalArgumentError when data.weight is null', () => {
    const data = {
      weight: null,
      height: 100,
      age: 100,
      gender: 'female',
      activity: 'min',
    };
    expect(() => weightCalculator.calculateWeight(data))
      .toThrow(IllegalArgumentError);
  });

  it('throws IllegalArgumentError when data.height is null', () => {
    const data = {
      weight: 100,
      height: null,
      age: 100,
      gender: 'female',
      activity: 'min',
    };
    expect(() => weightCalculator.calculateWeight(data))
      .toThrow(IllegalArgumentError);
  });

  it('throws IllegalArgumentError when data.age is null', () => {
    const data = {
      weight: 100,
      height: 100,
      age: null,
      gender: 'female',
      activity: 'min',
    };
    expect(() => weightCalculator.calculateWeight(data))
      .toThrow(IllegalArgumentError);
  });

  it('throws IllegalArgumentError when data.weight is 0', () => {
    const data = {
      weight: 0,
      height: 100,
      age: 10,
      gender: 'female',
      activity: 'min',
    };
    expect(() => weightCalculator.calculateWeight(data))
      .toThrow(IllegalArgumentError);
  })

  it('throws IllegalArgumentError when data.height is 0', () => {
    const data = {
      weight: 100,
      height: 0,
      age: 10,
      gender: 'female',
      activity: 'min',
    };
    expect(() => weightCalculator.calculateWeight(data))
      .toThrow(IllegalArgumentError);
  })

  it('throws IllegalArgumentError when data.age is 0', () => {
    const data = {
      weight: 100,
      height: 100,
      age: 0,
      gender: 'female',
      activity: 'min',
    };
    expect(() => weightCalculator.calculateWeight(data))
      .toThrow(IllegalArgumentError);
  })

  it('throws IllegalArgumentError when data.height is -1', () => {
    const data = {
      weight: -1,
      height: 100,
      age: 10,
      gender: 'female',
      activity: 'min',
    };
    expect(() => weightCalculator.calculateWeight(data))
      .toThrow(IllegalArgumentError);
  })

  it('throws IllegalArgumentError when data.weight is -1', () => {
    const data = {
      weight: 100,
      height: -1,
      age: 10,
      gender: 'female',
      activity: 'min',
    };
    expect(() => weightCalculator.calculateWeight(data))
      .toThrow(IllegalArgumentError);
  })

  it('throws IllegalArgumentError when data.age is -1', () => {
    const data = {
      weight: 100,
      height: 100,
      age: -1,
      gender: 'female',
      activity: 'min',
    };
    expect(() => weightCalculator.calculateWeight(data))
      .toThrow(IllegalArgumentError);
  })
})
