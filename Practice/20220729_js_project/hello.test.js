import { expect, it } from 'vitest';
import { hello } from './hello.js';


it('will say hello world with no name input', () => {
  //ARRANGE

  //ACT
  const result = hello();

  //ASSERT
  expect(result).toBe('hello world');
});
