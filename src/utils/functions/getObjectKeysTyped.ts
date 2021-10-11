import { isString, isNumeric } from './isSomething';

export function getObjectKeysTyped<T>(obj: T): (keyof T)[] {
  return Object.keys(obj).filter((key) => {
    return isString(key) && !isNumeric(key);
  }) as (keyof T)[];
}
