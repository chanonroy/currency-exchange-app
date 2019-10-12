import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { ChevronDown as ChevronDownIcon } from 'react-feather';
import { useClickAway } from 'react-use';

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Container = styled(FlexContainer)`
  user-select: none;
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`

const Flag = styled.img`
  height: ${props => props.size || '40px' };
  margin-right: ${props => props.marginRight || '0px' };
`

const Label = styled.div`
  margin-left: 12px;
  color: ${props => props.theme.colors.darkGrey};
  font-weight: bold;
  font-size: 0.7;
`;

const Dropdown = styled.div`
  position: absolute;
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
    color: ${props => props.theme.colors.darkGrey};
    background-color: whitesmoke;
  }
`

const CurrencySelector = () => {
  const [dropdownOpen, setDropdownOpen] = useState(true);
  const ref = useRef(null);

  useClickAway(ref, () => setDropdownOpen(false));

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <Container
        onClick={() => setDropdownOpen(!dropdownOpen)}
        data-testid="currency-dropdown-btn">
        <FlexContainer>
          <Flag src="/static/us-flag.svg" />
          <Label> USD - United States Dollars </Label> 
        </FlexContainer>
        <ChevronDownIcon color="lightgrey" />
      </Container>
      {dropdownOpen &&
        <Dropdown data-testid="currency-dropdown">
          <DropdownItem>
            <Flag size="25px" marginRight="8px" src="/static/us-flag.svg" />
            USD - United States Dollars
          </DropdownItem>
          <DropdownItem>
            <Flag size="25px" marginRight="8px" src="/static/uk-flag.svg" />
            GBP - Pound sterling
          </DropdownItem>
          <DropdownItem>
            <Flag size="25px" marginRight="8px" src="/static/eu-flag.svg" />
            EUR - Euro
          </DropdownItem>
        </Dropdown>
      }
    </div>
  )
}

export default CurrencySelector;