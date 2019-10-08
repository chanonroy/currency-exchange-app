import NextHead from 'next/head';
import React from 'react';

const Head = ({ title }) => {
  return (
    <NextHead>
      <meta charSet="UTF-8" />
      <title> {title} </title>
      <meta name="description" content="Exchange currencies with live FX rates" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
        key="viewport"
      />
      <link rel="shortcut icon" type="image/x-icon" href="/static/favicon.png" />
    </NextHead>
  );
};

export default Head;
