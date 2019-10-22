import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons';

// ========================== STYLES:BEGIN ========================== //

const LogoWrapper = styled.div`
  text-align: center;
`;

const LogoIcon = styled(FontAwesomeIcon)`
  margin-right: 1rem;
  color: ${props => props.theme.colors.hover};
`;

const LogoLink = styled(Link)`
  text-align: center;
  &:link,
  &:visited {
    font-size: 3rem;
    text-transform: uppercase;
    color: ${props => props.theme.colors.main};
    text-decoration: none;
  }
`;

// ========================== STYLES:END ========================== //

const Logo = () => {
	return (
		<LogoWrapper>
			<LogoLink to='/'>
				<LogoIcon icon={faFilm} />
				Movies
      </LogoLink>
		</LogoWrapper>
	);
};

export default Logo;
