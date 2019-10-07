import React from 'react';
import styled from 'styled-components';

const MoviesWrapper = styled.div`
  width: 80%;
  height: 100%;
  padding: 6rem;
  background-color: var(--color-body);
  margin-left: 20%;
`;

const Movies = () => {
  return <MoviesWrapper>Movies</MoviesWrapper>;
};

export default Movies;
