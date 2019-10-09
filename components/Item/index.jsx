import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 400px;
  height: 500px;
  padding: 20px;
  border-radius: ${props => props.theme.sizes.borderRadius};
  box-shadow: ${props => props.theme.shadows.z3};
  background-color: white;
  text-align: center;
`;

const Item = () => {
  return (
    <Card data-testid="item">
      <div>Card</div>
    </Card>
  )
}

export default Item;
