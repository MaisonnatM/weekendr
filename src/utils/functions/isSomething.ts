/**
 * Checks if `value` is a string.
 */
export const isString = (value: unknown): value is string =>
  typeof value === 'string';

/**
 * Checks if `value` is a number.
 */
export const isNumber = (value: unknown): value is number =>
  typeof value === 'number';

/**
 * Checks if `value` is a boolean.
 */
export const isBoolean = (value: unknown): value is boolean =>
  typeof value === 'boolean';

/**
 * Checks if `value` is undefined.
 */
export const isUndefined = (value: unknown): value is undefined =>
  value === undefined;

/**
 * Checks if `value` is an object.
 */
export const isObject = (value: unknown): value is Record<string, unknown> =>
  value === Object(value) && !(value instanceof Array);

/**
 * Checks if `value` is true.
 */
export const isTrue = (value: unknown): value is true => value === true;

/**
 * Checks if `value` is false.
 */
export const isFalse = (value: unknown): value is false => value === false;

/**
 * Checks if a string is an url.
 */
export const isAnUrl = (value: string): boolean =>
  value.lastIndexOf('url', 0) === 0;

/**
 * Checks if a value is an array.
 */
export function isArray<T>(value: unknown): value is Array<T> {
  return Array.isArray(value);
}

/**
 * Checks if an array is empty.
 */
export const isArrayEmpty = (array: unknown[]): boolean =>
  Boolean(array.length) === false;
/**
 * Checks if a string can be a number.
 */
export const isNumeric = (string: string): boolean => {
  return !isNaN(+string) && !isNaN(parseFloat(string));
};

export const isNegative = (number: number): boolean => number < 0;
