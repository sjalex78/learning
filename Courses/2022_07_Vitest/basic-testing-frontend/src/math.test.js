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

//check if the function yields 0 if the array is empty
it('should return zero with an empty array', () => {
    //arrange
    const numbers = [];

    //act
    const result = add(numbers);
    //assert
    expect(result).toBe(0);
});


//check if no argument is added should through an error
//when you wrap a function in the constant it will look to see if there was an error thrown
it('should throw an error if no values is passed into the function', () =>{
   const resultFn = () =>{
    add();
   };
    expect(resultFn).toThrow();
    //add .not check for the opposite added before the .toThrow
});

it('throw an error if provide with multiple arguments instead of an array', () =>{
    const num1 =1;
    const num2 =2;

    const resultFn = () =>{
        add(num1,num2);
    };

    expect(resultFn).toThrow();
});