import { render } from '@testing-library/react';
import React from 'react';
import styled, { ThemeProvider } from "styled-components";

import theme from '../lib/theme';

/**
 * Higher order function to allow use of styled component theme during testing
 * @param {any} component - value to be formatted
 */
const renderWithTheme = (component) => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

export default renderWithTheme;
