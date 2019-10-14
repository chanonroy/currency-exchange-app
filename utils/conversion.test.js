import { convertCurrency } from './conversion.js';

describe('Conversion utility', () => {
  it('convertCurrency works with numbers', () => {
    const result = convertCurrency(1, 1.5);
    expect(result).toBe('1.50');
  });
  it('convertCurrency works with strings', () => {
    const result = convertCurrency('1', '1.5');
    expect(result).toBe('1.50');
  });
  it('convertCurrency returns null if no amount is specified', () => {
    const result = convertCurrency('', '1.5');
    expect(result).toBe(null);
  });
});
