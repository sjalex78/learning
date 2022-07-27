import { expect, it} from 'vitest';
// test can be interchangeable with it

import { add } from './math';

it('should sum all the numbers values in an array', () => {
    //arrange
    const numbers = [1, 2, 3];
    const expectedResult =numbers.reduce(
        (preValue, curValue) => preValue +curValue,
        0
    );

    // act
    const result = add(numbers);

    //assert
    expect(result).toBe(expectedResult);
    //rather than hard code the expected results (6) calculate the expected result reduce method that can be used on arrays.
});

// in the string you describe/statement what your expected behaviour is

it('should yield NaN is at least one invalid number is provided',() =>{
    //arrange
    const inputs = [1, 'invalid'];

    //act
    const result = add(inputs);

    //assert
    expect(result).toBeNaN();
});

it('should yield correct sum if array of numeric string values is provided', () => {
    //arrange
    const numbers = ['1', '2'];
    const expectedResult =numbers.reduce(
        (preValue, curValue) => +preValue + +curValue,
        0
    );

    //act
    const result = add(numbers);

    //assert
    expect(result).toBe(expectedResult);
});