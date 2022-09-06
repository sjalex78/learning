import { expect, it}  from 'vitest';


import { hello } from './learning.js';

it('will say hello world with no name input', () => {

  const result = hello();

  expect(result).toBe('hello world');
});
