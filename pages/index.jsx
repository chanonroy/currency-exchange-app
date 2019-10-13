import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Head from "../components/Head";
import ExchangeWidget from "../components/ExchangeWidget";
import CurrencySelect from "../components/CurrencySelect";

import convertCurrency from "../utils/conversion";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const Home = () => {
  return (
    <>
      <Head title="Currency Exchange App" />
      <Container>
        <ExchangeWidget />
      </Container>
    </>
  );
};

export default Home;
