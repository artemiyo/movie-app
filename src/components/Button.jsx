import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.button`
  font-family: 'Roboto', sans-serif;
  width: 11rem;
  height: 4rem;
  color: ${props => props.theme.colors.main};
  background-color: ${props => props.theme.colors.sidebar};
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const Button = ({ children }) => <ButtonContainer>{children}</ButtonContainer>;

export default Button;
