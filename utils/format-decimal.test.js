import formatDecimal from './format-decimal.js';

describe('Format Decimal function', () => {
  it('works with numbers', () => {
    const result = formatDecimal(1.111);
    expect(result).toBe(1.11);
  });
  it('works with strings', () => {
    const result = formatDecimal('1.111');
    expect(result).toBe(1.11);
  });
  it('will skip formatting if whole number', () => {
    const result = formatDecimal('1');
    expect(result).toBe('1');
  });
  it('can handle a decimal with one period', () => {
    const result = formatDecimal('1.');
    expect(result).toBe('1.');
  });
  it('is able to handle undefined input', () => {
    const result = formatDecimal('');
    expect(result).toBe('');
  });
});
