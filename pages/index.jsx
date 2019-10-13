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
  padding: 20px;
  border-radius: ${props => props.theme.sizes.borderRadius};
  box-shadow: ${props => props.theme.shadows.z3};
  background-color: white;
`;

const CurrencyNote = styled.div`
  color: ${props => props.theme.colors.gray5};
  margin: 10px 0;

`

const CurrencyInput = styled.input`
  color: ${props => props.theme.colors.gray6};
  font-weight: 300;
  border: none;
  font-size: 3em;
  width: 100%;
  ::placeholder {
    color: ${props => props.theme.colors.gray6};
  }
`

const Divider = styled.hr`
  border-width: 0.5px;
  border-color: ${props => props.theme.colors.gray3};
`

const CurrencyConverter = () => {
  const [fromAmount, setFromAmount] = useState('');
  const [toAmount, setToAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('GBP');

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

  return (
    <>
      <Head title="Currency Exchange App" />
      <Container>
        <Card data-testid="item">

          <div style={{ marginBottom: '25px' }}>
            <CurrencySelect
              currencyCode={fromCurrency}
              onSelect={setFromCurrency}
              />
            <CurrencyNote> 1 USD = 1.61 CAD </CurrencyNote> 
            <CurrencyInput
              placeholder="0"
              value={fromAmount}
              onChange={e => updateFromAmount(e.target.value, fromRate)} />
          </div>

          <Divider />

          <div style={{ marginTop: '25px' }}>
            <CurrencySelect
              currencyCode={toCurrency}
              onSelect={setToCurrency}
              />
            <CurrencyNote> 1 USD = 1.61 CAD </CurrencyNote> 
            <CurrencyInput
              placeholder="0"
              value={toAmount}
              onChange={e => updateToAmount(e.target.value, toRate)} />
          </div>

        </Card>
      </Container>
    </>
  );
};

export default CurrencyConverter;
