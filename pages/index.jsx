import React, { useState } from "react";
import styled from "styled-components";

import Head from "../components/Head";
import CurrencySelect from '../components/CurrencySelect';

import convertCurrency from "../utils/conversion";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const Card = styled.div`
  width: 375px;
  height: 500px;
  padding: 20px;
  border-radius: ${props => props.theme.sizes.borderRadius};
  box-shadow: ${props => props.theme.shadows.z3};
  background-color: white;
`;

const CurrencyConverter = () => {
  const [fromAmount, setFromAmount] = useState('');
  const [toAmount, setToAmount] = useState('');

  // GBP to CAD
  const toRate = 1.6
  const fromRate = 0.6

  const updateFromAmount = (value, rate) => {
    // valid number check
    if (!value || isNaN(value)) {
      setToAmount('0');
      setFromAmount(value);
      return;
    }

    // is it a decimal?
    const amount = value % 1 !== 0 ? Math.floor(value * 100) / 100: value;
    const converted = convertCurrency(amount, rate);

    setToAmount(converted);
    setFromAmount(amount);
  }

  const updateToAmount = (value, rate) => {
    // valid number check
    if (!value || isNaN(value)) {
      setFromAmount('0');
      setToAmount(value);
      return;
    }

    // is it a decimal?
    const amount = value % 1 !== 0 ? Math.floor(value * 100) / 100: value;
    const converted = convertCurrency(amount, rate);

    setFromAmount(converted);
    setToAmount(amount);
  }

  // TODO: change country
  // TODO: reset bucket
  // TODO: swap buckets

  return (
    <>
      <Head title="Currency Exchange App" />
      <Container>
        <Card data-testid="item">
          <CurrencySelect />

          {/* <div>Card</div>
          <div>
            To:
            <input
              value={fromAmount}
              onChange={e => updateFromAmount(e.target.value, fromRate)}
            />
          </div>
          <div>
            From:
            <input
              value={toAmount}
              onChange={e => updateToAmount(e.target.value, toRate)}
            />
          </div> */}
        </Card>
      </Container>
    </>
  );
};

export default CurrencyConverter;
