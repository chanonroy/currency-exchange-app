/**
 * Utility function to convert a value to two decimal places (if needed)
 * @param {String || Number} value - value to be formatted
 * @return {String || Number} formattedResult
 */
const formatDecimal = (value) => {
  return value % 1 !== 0 ? Math.round(value * 100) / 100 : value;
}

export default formatDecimal;
