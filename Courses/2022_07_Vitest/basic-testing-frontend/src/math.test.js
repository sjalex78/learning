import { expect, it} from 'vitest';
// test can be interchangeable with it

import { add } from './math';

it('should sum all the numbers values in an array', () => {
    const result = add([1,2,3]);
    expect(result).toBe(6);
});

// in the string you describe/statement what your expected behaviour is