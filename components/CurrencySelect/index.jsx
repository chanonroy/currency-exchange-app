import React from 'react';
import styled from 'styled-components';
import { ChevronDown as ChevronDownIcon } from 'react-feather';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Label = styled.div`
  margin-left: 12px;
  color: #637381;
  font-weight: bold;
  font-size: 0.7;
`;

const Flag = styled.img`
  height: 40px;
`

const CurrencySelector = () => {
  return (
    <Container>
      <Container>
        <Flag src="/static/us-flag.svg" />
        <Label> USD - United States Dollars </Label> 
      </Container>
      <ChevronDownIcon color="lightgrey" />
    </Container>
  )
}

export default CurrencySelector;