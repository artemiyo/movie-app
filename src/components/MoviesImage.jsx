import React from 'react';
import styled from 'styled-components';

import NoPoster from './NoPoster';

// ========================== STYLES:BEGIN ========================== //

const MovieImage = styled.img`
  min-width: 100%;
  height: 100%;
`;

// ========================== STYLES:END ========================== //

const MoviesImage = ({ poster, title, setIsImageLoaded }) => {
  return poster ? (
    <MovieImage
      onLoad={() => setIsImageLoaded()}
      src={`https://image.tmdb.org/t/p/w500${poster}`}
      alt={title}
    />
  ) : (
    <NoPoster setIsImageLoaded={setIsImageLoaded} />
  );
};

export default MoviesImage;
