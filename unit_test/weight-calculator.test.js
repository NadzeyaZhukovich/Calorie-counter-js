const { test, it } = require('@jest/globals');
const { fail } = require('yargs');
const { normWeight, loseWeight, putWeight } = require('../js/weight-calculator.js');
const { IllegalArgumentError } = require('../js/weight-calculator.js');

describe('calculateWeightForMan', () => {
  it('returns correct result when data is filled and all values more than 0 and activity is minimal', () => {
    const expectedResult = 1356;
    const data = {
      weight: 100,
      height: 100,
      age: 100,
      gender: 'male',
      activity: 'min',
    };

    expect(normWeight(data))
      .toBe(expectedResult);
  });

  it('returns correct result when data is filled and all values more than 0 and activity is low', () => {
    const expectedResult = 162;
    const data = {
      weight: 10,
      height: 10,
      age: 10,
      gender: 'male',
      activity: 'low',
    };

    expect(normWeight(data))
      .toBe(expectedResult);
  });

  it('returns correct result when data is filled and all values more than 0 and activity is medium', () => {
    const expectedResult = 2352;
    const data = {
      weight: 60,
      height: 170,
      age: 30,
      gender: 'male',
      activity: 'medium',
    };

    expect(normWeight(data))
      .toBe(expectedResult);
  });

  it('returns correct result when data is filled and all values more than 0 and activity is high', () => {
    const expectedResult = 2521;
    const data = {
      weight: 55,
      height: 177,
      age: 40,
      gender: 'male',
      activity: 'high',
    };

    expect(normWeight(data))
      .toBe(expectedResult);
  });

  it('returns correct result when data is filled and all values more than 0 and activity is max', () => {
    const expectedResult = 2670;
    const data = {
      weight: 50,
      height: 160,
      age: 20,
      gender: 'male',
      activity: 'max',
    };

    expect(normWeight(data))
      .toBe(expectedResult);
  });
  
  it('throws IllegalArgumentError when data is empty', () => {
    expect(() => { normWeight(null)})
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
    expect(() => normWeight(data))
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
    expect(() => normWeight(data))
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
    expect(() => normWeight(data))
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
    expect(() => normWeight(data))
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
    expect(() => normWeight(data))
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
    expect(() => normWeight(data))
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
    expect(() => normWeight(data))
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
    expect(() => normWeight(data))
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
    expect(() => normWeight(data))
      .toThrow(IllegalArgumentError);
  })
})


describe('calculateWeightForWomen', () => {
  it('returns correct result when data is filled and all values more than 0 and activity is minimal', () => {
    const expectedResult = 1157;
    const data = {
      weight: 100,
      height: 100,
      age: 100,
      gender: 'female',
      activity: 'min',
    };

    expect(normWeight(data))
      .toBe(expectedResult);
  });

  it('returns correct result when data is filled and all values more than 0 and activity is low', () => {
    const expectedResult = 1411;
    const data = {
      weight: 50,
      height: 150,
      age: 50,
      gender: 'female',
      activity: 'low',
    };

    expect(normWeight(data))
      .toBe(expectedResult);
  });

  it('returns correct result when data is filled and all values more than 0 and activity is medium', () => {
    const expectedResult = 2095;
    const data = {
      weight: 60,
      height: 170,
      age: 30,
      gender: 'female',
      activity: 'medium',
    };

    expect(normWeight(data))
      .toBe(expectedResult);
  });

  it('returns correct result when data is filled and all values more than 0 and activity is high', () => {
    const expectedResult = 2234;
    const data = {
      weight: 55,
      height: 177,
      age: 40,
      gender: 'female',
      activity: 'high',
    };

    expect(normWeight(data))
      .toBe(expectedResult);
  });

  it('returns correct result when data is filled and all values more than 0 and activity is max', () => {
    const expectedResult = 2354;
    const data = {
      weight: 50,
      height: 160,
      age: 20,
      gender: 'female',
      activity: 'max',
    };

    expect(normWeight(data))
      .toBe(expectedResult);
  });
  
  it('throws IllegalArgumentError when data is empty', () => {
    expect(() => { normWeight(null)})
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
    expect(() => normWeight(data))
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
    expect(() => normWeight(data))
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
    expect(() => normWeight(data))
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
    expect(() => normWeight(data))
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
    expect(() => normWeight(data))
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
    expect(() => normWeight(data))
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
    expect(() => normWeight(data))
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
    expect(() => normWeight(data))
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
    expect(() => normWeight(data))
      .toThrow(IllegalArgumentError);
  })
})

describe('loseWeightForMale', () => {
  it('returns correct result when data is filled and weight coefficient is 0.58', () => {
    const expectedResult = 1153;
    const data = {
      weight: 100,
      height: 100,
      age: 100,
      gender: 'male',
      activity: 'min',
    };

    expect(loseWeight(data))
      .toBe(expectedResult);
  });
})

describe('loseWeightForFemale', () => {
  it('returns correct result when data is filled and weight coefficient is 0.58', () => {
    const expectedResult = 983;
    const data = {
      weight: 100,
      height: 100,
      age: 100,
      gender: 'female',
      activity: 'min',
    };

    expect(loseWeight(data))
      .toBe(expectedResult);
  });
})

describe('putWeightForMale', () => {
  it('returns correct result when data is filled and weight coefficient is 1.15', () => {
    const expectedResult = 1559;
    const data = {
      weight: 100,
      height: 100,
      age: 100,
      gender: 'male',
      activity: 'min',
    };

    expect(putWeight(data))
      .toBe(expectedResult);
  });
})

describe('putWeightForFemale', () => {
  it('returns correct result when data is filled and weight coefficient is 1.15', () => {
    const expectedResult = 1330;
    const data = {
      weight: 100,
      height: 100,
      age: 100,
      gender: 'female',
      activity: 'min',
    };

    expect(putWeight(data))
      .toBe(expectedResult);
  });
})