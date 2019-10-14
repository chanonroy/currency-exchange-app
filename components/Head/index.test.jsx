import React from 'react';

import Head from './index';
import renderWithTheme from '../../utils/renderWithTheme';

describe('Head component', () => {
  it('can render properly', () => {
    const component = renderWithTheme(
      <Head title="Currency Exchange App" />
    );
    expect(component).toBeDefined();
  });
});
