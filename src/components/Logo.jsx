import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons';

// ========================== STYLES:BEGIN ========================== //

const LogoWrapper = styled.div`
  text-align: center;
`;

const Icon = styled(FontAwesomeIcon)`
  margin-right: 1rem;
  color: var(--color-hover);
`;

const LogoLink = styled(Link)`
  text-align: center;
  &:link,
  &:visited {
    font-size: 3rem;
    text-transform: uppercase;
    color: var(--color-main);
    text-decoration: none;
  }
`;

const ColorLetter = styled.span`
  color: var(--color-hover);
`;

// ========================== STYLES:END ========================== //

const Logo = () => {
  return (
    <LogoWrapper>
      <LogoLink to='/'>
        <Icon icon={faFilm} />
        Mov<ColorLetter>i</ColorLetter>es
      </LogoLink>
    </LogoWrapper>
  );
};

export default Logo;
