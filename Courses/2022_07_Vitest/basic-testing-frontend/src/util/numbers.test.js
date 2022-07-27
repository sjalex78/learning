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
    expect(result).toBeTypeOf("number");

});

it('should yeild NAN for non-transformable values', () => {
    const input = 'invalid';

    const result =transformToNumber(input);

    expect(result).toBeNaN();

});