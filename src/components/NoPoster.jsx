import React, { useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons';

const NoPosterWrapper = styled.div`
  width: 25rem;
  height: 35rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NoPosterIcon = styled(FontAwesomeIcon)`
  font-size: 8rem;
`;

const NoPoster = ({ setIsImageLoaded }) => {
  useEffect(() => {
    setIsImageLoaded(false);
  });

  return (
    <NoPosterWrapper>
      <NoPosterIcon icon={faFilm} />
    </NoPosterWrapper>
  );
};

export default NoPoster;
