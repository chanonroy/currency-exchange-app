import React from "react";
import Document from "next/document";
import { ServerStyleSheet } from "styled-components";

/**
 * Replaces the HTML wrapping the app.
 */
export default class MyDocument extends Document {
  /**
   * Collect stylesheets from styled-components and add
   * global styles to the app.
   */
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      };
    } finally {
      sheet.seal();
    }
  }
}
