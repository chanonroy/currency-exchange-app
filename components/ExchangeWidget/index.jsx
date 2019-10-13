import React, { useState, useEffect } from "react";
import styled from "styled-components";

import CurrencySelect from "../CurrencySelect";
import { convertCurrency, calculateMirrorRate } from "../../utils/conversion";

const Card = styled.div`
  width: 375px;
  padding: 20px;
  border-radius: ${props => props.theme.sizes.borderRadius};
  box-shadow: ${props => props.theme.shadows.z3};
  background-color: white;
`;

const CurrencyLabel = styled.div`
  color: ${props => props.theme.colors.gray5};
  margin: 15px 0;
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

const ExchangeWidget = () => {
  const [baseAmount, setBaseAmount] = useState('');
  const [convertedAmount, setConvertedAmount] = useState('');
  const [baseCurrency, setBaseCurrency] = useState('USD');
  const [convertedCurrency, setConvertedCurrency] = useState('GBP');
  const [baseToConvertedRate, setBaseToConvertedRate] = useState('1.2');
  const [convertedToBaseRate, setConvertedToBaseRate] = useState('0.8');

  // GBP to CAD
  // const toRate = 0.79551
  // const fromRate = calculateMirrorRate(toRate) // TODO: add currency here

  // Fetch rates from API every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      console.log('Fetch API');
      // api endpoint to get base currency
      // set baseToConvertedRate
      // set convertedToBaseRate
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  // TODO: DO WE ONLY NEED TO CHANGE ON base currency change??
  // Fetch rates when currency changes
  useEffect(() => {
    console.log('fetchAPI on currency change');
  }, [baseCurrency]);

  const updateBaseAmount = (value, rate) => {
    // Check if valid number
    if (!value || isNaN(value)) {
      setConvertedAmount('0');
      setBaseAmount(value);
      return;
    }
    // Ensure 2 decimal points
    const amount = value % 1 !== 0 ? Math.floor(value * 100) / 100: value;
    // Convert and update currencies
    const converted = convertCurrency(amount, rate);
    setConvertedAmount(converted);
    setBaseAmount(amount);
  }

  const updateConvertedAmount = (value, rate) => {
    // Check if valid number
    if (!value || isNaN(value)) {
      setBaseAmount('0');
      setConvertedAmount(value);
      return;
    }
    // Ensure 2 decimal points
    const amount = value % 1 !== 0 ? Math.floor(value * 100) / 100: value;
    // Convert and update currencies
    const converted = convertCurrency(amount, rate);
    setBaseAmount(converted);
    setConvertedAmount(amount);
  }

  const baseToConvertedRateLabel = `1 ${baseCurrency} = ${convertedToBaseRate} ${convertedCurrency}`;
  const convertedToBaseRateLabel = `1 ${convertedCurrency} = ${baseToConvertedRate} ${baseCurrency}`;

  return (
    <Card data-testid="item">
      <div style={{ marginBottom: '25px' }}>
        <CurrencySelect
          currencyCode={baseCurrency}
          onSelect={setBaseCurrency}
          />
        <CurrencyLabel>
          {baseToConvertedRateLabel}
        </CurrencyLabel> 
        <CurrencyInput
          placeholder="0"
          value={baseAmount}
          onChange={e => updateBaseAmount(e.target.value, baseToConvertedRate)} />
      </div>

      <Divider />

      <div style={{ marginTop: '25px' }}>
        <CurrencySelect
          currencyCode={convertedCurrency}
          onSelect={setConvertedCurrency}
          />
        <CurrencyLabel>
          {convertedToBaseRateLabel}
        </CurrencyLabel> 
        <CurrencyInput
          placeholder="0"
          value={convertedAmount}
          onChange={e => updateConvertedAmount(e.target.value, convertedToBaseRate)} />
      </div>
    </Card>
  )
}

export default ExchangeWidget;