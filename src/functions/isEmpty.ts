/**
 * @description Checks if the value is undefined, null, empty string, empty array or string of an empty object
 * @param {unknown} v - The value to check
 * @returns {boolean} - Return true if the value is empty
 */
export const isEmptyValue = (v: unknown): boolean => v === ''
  || v === undefined
  || v === null
  || (Array.isArray(v) && v.length === 0)
  || (typeof v === 'string' && v.replaceAll(/[[\]{}]/g, '').length === 0)
  || JSON.stringify(v).replaceAll(/[[\]{}]/g, '').length === 0;

/**
 * @description Checks if the value is an object and all it's keys are empty values
 * @param {unknown} v - The value to check
 * @returns {boolean} - Return true if it's an object and all it's values are empty
 */
export const isEmptyObject = (v: unknown): boolean => !!v && typeof v === 'object' && Object.values(v).every(it => isEmptyValue(it));

/**
 * @description Checks if v is an empty value or an empty object
 * @param {unknown} v - The value to check
 * @returns {boolean} - Return true if it's empty
 */
export const isEmpty = (v: unknown): boolean => isEmptyValue(v) || isEmptyObject(v);
