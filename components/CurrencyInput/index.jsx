import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";

const TextInput = styled.input`

`

const CurrencyInput = ({ value, onChange }) => {
  return (
    <input value={value} onChange={(e) => onChange(e.target.value)} />
  )
}

CurrencyInput.propTypes = {
  title: PropTypes.string.isRequired
};