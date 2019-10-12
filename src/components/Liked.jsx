import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

// ========================== STYLES:BEGIN ========================== //

const HeartIcon = styled(FontAwesomeIcon)`
  font-size: 2.5rem;
  cursor: pointer;
  opacity: 0.5;
  transition: all 0.3 ease;

  &:hover {
    color: ${props => props.theme.colors.hover};
    transform: scale(1.1);
  }
`;

// ========================== STYLES:END ========================== //

const Liked = () => {
  return <HeartIcon icon={faHeart} />;
};

export default Liked;
