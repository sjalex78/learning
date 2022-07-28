//Goal: write a program that displays hello world

import { expect, it } from 'vitest';
import { hello } from './hello.js';

it('will display hello world', () => {
//arrange
// const message = 'hello world';
console.log(hello);

//act
const result = hello();

//assert

expect(result).toBe('hello world')

});


