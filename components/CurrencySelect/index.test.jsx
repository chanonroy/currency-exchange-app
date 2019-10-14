import React from 'react';
import { fireEvent } from '@testing-library/react';

import CurrencySelector from './index';
import renderWithTheme from '../../utils/renderWithTheme';

describe('Currency Select component', () => {
  it('can render properly', () => {
    const component = renderWithTheme(
      <CurrencySelector
        currencyCode={'GBP'}
        onSelect={val => val}/>
    );
    expect(component).toBeDefined();
  });
  it('should not show the dropdown on load', () => {
    const { getByTestId } = renderWithTheme(
      <CurrencySelector
        currencyCode={'GBP'}
        onSelect={val => val}/>
    );
    const dropdown = getByTestId('currency-dropdown');
    expect(dropdown).not.toBeVisible()
  });
  it('should show dropdown on click', async () => {
    const { getByTestId } = renderWithTheme(
      <CurrencySelector
        currencyCode={'GBP'}
        onSelect={val => val}/>
    );
    const dropdownButton = getByTestId('currency-dropdown-btn');
    await fireEvent.click(dropdownButton);

    const dropdown = getByTestId('currency-dropdown');

    // TODO: add better assertion to this test
    expect(dropdown).toBeDefined();
  });
});
