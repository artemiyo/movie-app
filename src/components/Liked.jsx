import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const HeartIcon = styled(FontAwesomeIcon)`
  font-size: 2.5rem;
  cursor: pointer;
  transition: all 0.3 ease;

  &:hover {
    color: var(--color-hover);
    transform: scale(1.1);
  }
`;

const Liked = () => {
  return <HeartIcon icon={faHeart} />;
};

export default Liked;
