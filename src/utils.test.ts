import { expect, test } from 'vitest';
import { calculate, parseResponse } from './utils';
import { data, responseMock } from '../mocks';

test('calculate() should work as expected', () => {
  expect(calculate(18.518, 'CAD', data.list)).toBe(1);
  expect(calculate(7.02, 'CNY', data.list)).toBe(2);
  // test unknown code
  expect(calculate(10, 'XYZ', data.list)).toBeUndefined();
  // test empty data
  expect(calculate(10, 'CNY', [])).toBeUndefined();
});

test('parseResponse() should work as expected', () => {
  expect(parseResponse(responseMock)).toStrictEqual(data);
});
