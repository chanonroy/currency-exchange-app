/**
 * Utility function to convert a value to two decimal places (if needed)
 * @param {String || Number} value - value to be formatted
 * @return {Number} formattedResult
 */
const formatDecimal = (value) => {
  return value % 1 !== 0 ? Math.floor(value * 100) / 100 : Number(value);
}

export default formatDecimal;
