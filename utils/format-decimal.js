/**
 * Utility function to convert a value to two decimal places (if needed)
 * @param {String || Number} value - value to be formatted
 * @return {String} formattedResult
 */
const formatDecimal = (value) => value % 1 !== 0 ? Math.floor(value * 100) / 100: value

export default formatDecimal;