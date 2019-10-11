import App from "next/app";
import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";

import theme from "../lib/theme";

// Define global styles to be used across the app
const GlobalStyle = createGlobalStyle`
  body {
    background-color: whitesmoke;
    color: #212b36;
    margin: 0;
    font-family: Roboto, -apple-system, "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
  }
`;

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
