const { test, it } = require('@jest/globals');
const { fail } = require('yargs');
const {calculateWeightForMan, calculateWeightForWomen} = require('./../js/weight-calculator.js');
const {NullObjectPropertyError, NullObjectError, ZeroObjectPropertyError, LessZeroObjectPropertyError} = require('./../js/weight-calculator.js');

describe('calculateWeightForMan', () => {
  it('returns correct result when data is filled and all values more than 0', () => {
    const expectedResult = 1130;
    const data = {
      weight: 100,
      height: 100,
      age: 100
    };

    expect(calculateWeightForMan(data))
      .toBe(expectedResult);
  });
  
  it('throws NullObjectError when data is empty', () => {
    expect(() => { calculateWeightForMan(null)})
      .toThrow(NullObjectError);
  });
  
  it('throws NullObjectPropertyError when data.weight is null', () => {
    const data = {
      weight: null,
      height: 100,
      age: 100
    };
    expect(() => calculateWeightForMan(data))
      .toThrow(NullObjectPropertyError);
  });

  it('throws NullObjectPropertyError when data.height is null', () => {
    const data = {
      weight: 100,
      height: null,
      age: 100
    };
    expect(() => calculateWeightForMan(data))
      .toThrow(NullObjectPropertyError);
  });

  it('throws NullObjectPropertyError when data.age is null', () => {
    const data = {
      weight: 100,
      height: 100,
      age: null
    };
    expect(() => calculateWeightForMan(data))
      .toThrow(NullObjectPropertyError);
  });

  it('throws ZeroObjectPropertyError when data.weight is 0', () => {
    const data = {
      weight: 0,
      height: 100,
      age: 10
    };
    expect(() => calculateWeightForMan(data))
      .toThrow(ZeroObjectPropertyError);
  })

  it('throws ZeroObjectPropertyError when data.height is 0', () => {
    const data = {
      weight: 100,
      height: 0,
      age: 10
    };
    expect(() => calculateWeightForMan(data))
      .toThrow(ZeroObjectPropertyError);
  })

  it('throws ZeroObjectPropertyError when data.age is 0', () => {
    const data = {
      weight: 100,
      height: 100,
      age: 0
    };
    expect(() => calculateWeightForMan(data))
      .toThrow(ZeroObjectPropertyError);
  })


  it('throws LessZeroObjectPropertyError when data.height is -1', () => {
    const data = {
      weight: -1,
      height: 100,
      age: 10
    };
    expect(() => calculateWeightForMan(data))
      .toThrow(LessZeroObjectPropertyError);
  })

  it('throws LessZeroObjectPropertyError when data.weight is -1', () => {
    const data = {
      weight: 100,
      height: -1,
      age: 10
    };
    expect(() => calculateWeightForMan(data))
      .toThrow(LessZeroObjectPropertyError);
  })

  it('throws LessZeroObjectPropertyError when data.age is -1', () => {
    const data = {
      weight: 100,
      height: 100,
      age: -1
    };
    expect(() => calculateWeightForMan(data))
      .toThrow(LessZeroObjectPropertyError);
  })

})


describe('calculateWeightForWomen', () => {
  it('returns correct result when data is filled and all values more than 0', () => {
    const expectedResult = 964;
    const data = {
      weight: 100,
      height: 100,
      age: 100
    };

    expect(calculateWeightForWomen(data))
      .toBe(expectedResult);
  });
  
  it('throws NullObjectError when data is empty', () => {
    expect(() => { calculateWeightForWomen(null)})
      .toThrow(NullObjectError);
  });
  
  it('throws NullObjectPropertyError when data.weight is null', () => {
    const data = {
      weight: null,
      height: 100,
      age: 100
    };
    expect(() => calculateWeightForWomen(data))
      .toThrow(NullObjectPropertyError);
  });

  it('throws NullObjectPropertyError when data.height is null', () => {
    const data = {
      weight: 100,
      height: null,
      age: 100
    };
    expect(() => calculateWeightForWomen(data))
      .toThrow(NullObjectPropertyError);
  });

  it('throws NullObjectPropertyError when data.age is null', () => {
    const data = {
      weight: 100,
      height: 100,
      age: null
    };
    expect(() => calculateWeightForMan(data))
      .toThrow(NullObjectPropertyError);
  });

  it('throws ZeroObjectPropertyError when data.weight is 0', () => {
    const data = {
      weight: 0,
      height: 100,
      age: 10
    };
    expect(() => calculateWeightForWomen(data))
      .toThrow(ZeroObjectPropertyError);
  })

  it('throws ZeroObjectPropertyError when data.height is 0', () => {
    const data = {
      weight: 100,
      height: 0,
      age: 10
    };
    expect(() => calculateWeightForWomen(data))
      .toThrow(ZeroObjectPropertyError);
  })

  it('throws ZeroObjectPropertyError when data.age is 0', () => {
    const data = {
      weight: 100,
      height: 100,
      age: 0
    };
    expect(() => calculateWeightForWomen(data))
      .toThrow(ZeroObjectPropertyError);
  })


  it('throws LessZeroObjectPropertyError when data.height is -1', () => {
    const data = {
      weight: -1,
      height: 100,
      age: 10
    };
    expect(() => calculateWeightForWomen(data))
      .toThrow(LessZeroObjectPropertyError);
  })

  it('throws LessZeroObjectPropertyError when data.weight is -1', () => {
    const data = {
      weight: 100,
      height: -1,
      age: 10
    };
    expect(() => calculateWeightForWomen(data))
      .toThrow(LessZeroObjectPropertyError);
  })

  it('throws LessZeroObjectPropertyError when data.age is -1', () => {
    const data = {
      weight: 100,
      height: 100,
      age: -1
    };
    expect(() => calculateWeightForWomen(data))
      .toThrow(LessZeroObjectPropertyError);
  })
})