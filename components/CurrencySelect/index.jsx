import React, { useState, useRef } from 'react';
import PropTypes from "prop-types";
import { find } from 'lodash';
import posed from 'react-pose';
import styled from 'styled-components';
import { ChevronDown as ChevronDownIcon } from 'react-feather';
import { useClickAway } from 'react-use';

import CURRENCIES from '../../constants/currencies';

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Container = styled(FlexContainer)`
  user-select: none;
  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }
`

const Flag = styled.img`
  height: ${props => props.size || '40px' };
  margin-right: ${props => props.marginRight || '0px' };
`

const Label = styled.div`
  margin-left: 12px;
  color: ${props => props.theme.colors.gray6};
  font-weight: bold;
  font-size: 0.7;
`;

const AnimatedDropdown = posed.div({
  visible: {
    applyAtStart: { display: 'block' },
    opacity: 1,
    transition: { duration: 200 }
  },
  hidden: {
    applyAtEnd: { display: 'none' },
    opacity: 0,
    transition: { duration: 200 }
  }
});

const Dropdown = styled(AnimatedDropdown)`
  display: none;
  position: absolute;
  z-index: 100;
  top: 125%;
  width: 100%;
  padding: 8px 0;
  background-color: white;
  border-radius: ${props => props.theme.sizes.borderRadius};
  box-shadow: ${props => props.theme.shadows.z3};
`

const DropdownItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 15px;
  color: #919eab;
  font-size: 0.9em;
  &:hover {
    cursor: pointer;
    color: ${props => props.theme.colors.gray6};
    background-color: whitesmoke;
  }
`

const CurrencySelector = ({ currencyCode, onSelect }) => {
  const [dropdown, setDropdown] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setDropdown(false));

  const selectedCurrency = find(CURRENCIES, { code: currencyCode });
  if (!selectedCurrency) return null;

  const selectedCurrencylabel = `${selectedCurrency.code} - ${selectedCurrency.name}`;

  const handleOnClick = currencyCode => {
    onSelect(currencyCode);
    setDropdown(false);
  }

  return (
    <div ref={ref} style={{ position: 'relative' }}>

      {/* Dropdown Button */}
      <Container
        onClick={() => setDropdown(!dropdown)}
        data-testid="currency-dropdown-btn">
        <FlexContainer>
          <Flag
            src={selectedCurrency.flagPath}
            alt={`${selectedCurrency.code}-flag`} />
          <Label> {selectedCurrencylabel} </Label> 
        </FlexContainer>
        <ChevronDownIcon color="lightgrey" />
      </Container>

      {/* Dropdown List */}
      <Dropdown
        data-testid="currency-dropdown"
        pose={dropdown ? 'visible' : 'hidden'}>
        {CURRENCIES.map((currency, i) => {
          const label = `${currency.code} - ${currency.name}`;
          return (
            <DropdownItem
              key={i}
              onClick={() => handleOnClick(currency.code)}
              data-testid={`currency-dropdown-${currency.code}`}>
              <Flag size="25px" marginRight="10px" src={currency.flagPath} />
              {label}
            </DropdownItem>
          )
        })}
      </Dropdown>

    </div>
  )
}

CurrencySelector.propTypes = {
  currencyCode: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
};

export default CurrencySelector;
