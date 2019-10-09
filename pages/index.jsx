import React, { useState } from "react";
import Item from "../components/Item";
import Head from "../components/Head";
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const CurrencyConverter = () => {
  // const [fromAmount, setFromAmount] = useState(0);
  // const [toAmount, setToAmount] = useState(0);
  
  // const currency = 'USD';
  // const currencySymbol = '$';

  // const exchangeRate = 0.02;
  return (
    <>
      <Head title="Currency Exchange App" />
      <Container>
        <Item />
      </Container>
    </>
  );
};

export default CurrencyConverter;
