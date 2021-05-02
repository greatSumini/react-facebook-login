import { isObject, objectToParams, paramsToObject } from '../../src/utils';

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

describe('objectToParams', () => {
  test('return "" when input is not object', () => {
    const nonObjectInputs = [null, undefined, 'hello', 3, true];

    nonObjectInputs.forEach((input) => {
      expect(objectToParams(input)).toEqual('');
    });
  });

  test('return "" when input is empty object', () => {
    expect(objectToParams({})).toEqual('');
  });

  test('success', () => {
    expect(objectToParams({ a: 'b', c: 3 })).toEqual('?a=b&c=3');
    expect(objectToParams({ a: 3, c: true })).toEqual('?a=3&c=true');
  });
});

describe('paramsToObject', () => {
  test('return {} when input is "', () => {
    expect(paramsToObject('')).toEqual({});
  });

  test('success', () => {
    expect(paramsToObject('?a=b&c=3')).toEqual({ a: 'b', c: '3' });
    expect(paramsToObject('?a=3&c=true')).toEqual({ a: '3', c: 'true' });

    expect(paramsToObject('a=b&c=3')).toEqual({ a: 'b', c: '3' });
    expect(paramsToObject('a=3&c=true')).toEqual({ a: '3', c: 'true' });
  });
});
