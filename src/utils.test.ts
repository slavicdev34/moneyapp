import { expect, test } from 'vitest';
import { calculate } from './utils';
import { data } from '../mocks';

test('calculate() should work as expected', () => {
  expect(calculate(18.518, 'CAD', data.list)).toBe(1);
  expect(calculate(7.02, 'CNY', data.list)).toBe(2);
  // test unknown code
  expect(calculate(10, 'XYZ', data.list)).toBeUndefined();
  // test empty data
  expect(calculate(10, 'CNY', [])).toBeUndefined();
});
