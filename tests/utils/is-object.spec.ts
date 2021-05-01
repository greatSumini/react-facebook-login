import { isObject } from '../../src/utils';

describe('isObject', () => {
  test('String', () => {
    expect(isObject('myString')).toEqual(false);
  });

  test('Object', () => {
    expect(isObject({ param: 'value' })).toEqual(true);
  });

  test('Array', () => {
    expect(isObject(['a', 'b', 'c'])).toEqual(false);
  });

  test('Set', () => {
    expect(isObject(new Set([1, 2, 4]))).toEqual(false);
  });

  test('Date', () => {
    expect(isObject(new Date())).toEqual(false);
  });

  test('Undefined', () => {
    expect(isObject(undefined)).toEqual(false);
  });

  test('Null', () => {
    expect(isObject(null)).toEqual(false);
  });
});
