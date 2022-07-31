import { expect, it } from 'vitest';
import { transformToNumber } from './numbers';

//start with the
it('should take a string number and transform into a number of type number', () =>{
    //arrange
    const value = '2';

    // act
    const result =transformToNumber(value);

    //assert
    // expect(result).toBe(2);
    // add multiple expectation only if make sense must all be true..
    expect(result).toBeTypeOf("number");

});

it('should yeild NAN for non-transformable values', () => {
    const input = 'invalid';
    // empty object??
    const input2 = {};

    const result =transformToNumber(input);
    const result2 =transformToNumber(input2);

    expect(result).toBeNaN();
    expect(result2).toBeNaN();

});