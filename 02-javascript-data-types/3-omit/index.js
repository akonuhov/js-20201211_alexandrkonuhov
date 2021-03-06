/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {
  let omitObj = {};
  Object.keys(obj).forEach((objKey) => {
    if (!fields.some((fieldsKey) => (fieldsKey === objKey))) {
      omitObj[objKey] = obj[objKey];
    }
  });
  return omitObj;
}