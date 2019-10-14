import React, { useState, useEffect } from "react";
import styled from "styled-components";

import CurrencySelect from "../CurrencySelect";
import formatDecimal from "../../utils/format-decimal";
import { convertCurrency, calculateMirrorRate } from "../../utils/conversion";
import staticRates from "../../constants/rates";

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
  // Settings
  const [useLiveRates, setUseLiveRates] = useState(false);
  // Amounts
  const [baseAmount, setBaseAmount] = useState('');
  const [convertedAmount, setConvertedAmount] = useState('');
  // Currency Code
  const [baseCurrency, setBaseCurrency] = useState('USD');
  const [convertedCurrency, setConvertedCurrency] = useState('GBP');
  // Rates
  const [baseToConvertedRate, setBaseToConvertedRate] = useState('');
  const [convertedToBaseRate, setConvertedToBaseRate] = useState('');

  // Fetch rates from API every 10 seconds
  useEffect(() => {
    // TODO: FETCH RATES FROM API (placeholder)
    setBaseToConvertedRate('0.79');
    setConvertedToBaseRate(calculateMirrorRate('0.79'));

    const interval = setInterval(() => {
      // api endpoint to get base currency
      console.log('Fetch API interval');

      // TODO: SET Rates
      // TODO: SET Amounts

    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const updateBaseCurrency = (newCurrencyCode) => {
    // 1) update currency
    setBaseCurrency(newCurrencyCode);

    // 2) update rates
    const newBaseToConvertedRate = staticRates[newCurrencyCode][convertedCurrency];
    const newConvertedToBaseRate = calculateMirrorRate(newBaseToConvertedRate);
    setBaseToConvertedRate(newBaseToConvertedRate);
    setConvertedToBaseRate(newConvertedToBaseRate);

    // 3) update amounts (if needed)
    if (baseAmount) {
      if (newCurrencyCode === convertedCurrency) {
        setBaseAmount(baseAmount);
        setConvertedAmount(baseAmount);
      } else {
        updateBaseAmount(baseAmount, newBaseToConvertedRate);
        updateConvertedAmount(convertedAmount, newConvertedToBaseRate);
      }
    }
  }
  
  const updateConvertedCurrency = (newCurrencyCode) => {
    // 1) update currency
    setConvertedCurrency(newCurrencyCode);

    // 2) update rates
    const newBaseToConvertedRate = staticRates[baseCurrency][newCurrencyCode];
    const newConvertedToBaseRate = calculateMirrorRate(newBaseToConvertedRate);
    setBaseToConvertedRate(newBaseToConvertedRate);
    setConvertedToBaseRate(newConvertedToBaseRate);

    // 3) update amounts (if needed)
    if (baseAmount) {
      if (newCurrencyCode === baseCurrency) {
        setBaseAmount(convertedAmount);
        setConvertedAmount(convertedAmount);
      } else {
        updateBaseAmount(baseAmount, newBaseToConvertedRate);
        updateConvertedAmount(convertedAmount, newConvertedToBaseRate);
      }
    }
  }

  const updateBaseAmount = (value, rate) => {
    // 1) Check if valid number
    if (!value || isNaN(value)) {
      setConvertedAmount('0');
      setBaseAmount(value);
      return;
    }

    // 2) Ensure 2 decimal points
    const amount = formatDecimal(value);

    // 3) Convert and update currencies
    const result = convertCurrency(amount, rate);
    setConvertedAmount(result);
    setBaseAmount(amount);
  }

  const updateConvertedAmount = (value, rate) => {
    // 1) Check if valid number
    if (!value || isNaN(value)) {
      setBaseAmount('0');
      setConvertedAmount(value);
      return;
    }

    // 2) Ensure 2 decimal points
    const amount = formatDecimal(value);

    // 3) Convert and update currencies
    const result = convertCurrency(amount, rate);
    setBaseAmount(result);
    setConvertedAmount(amount);
  }

  const baseToConvertedRateLabel = `1 ${baseCurrency} = ${baseToConvertedRate} ${convertedCurrency}`;
  const convertedToBaseRateLabel = `1 ${convertedCurrency} = ${convertedToBaseRate} ${baseCurrency}`;

  return (
    <Card data-testid="exchange-widget">
      <div style={{ marginBottom: '25px' }}>
        <CurrencySelect
          currencyCode={baseCurrency}
          onSelect={updateBaseCurrency}
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
          onSelect={updateConvertedCurrency}
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
