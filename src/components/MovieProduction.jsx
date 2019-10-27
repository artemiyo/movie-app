import React from 'react';
import styled from 'styled-components';

// ========================== STYLES:BEGIN ========================== //

const MovieSubTitle = styled.h3`
  font-size: 1.8rem;
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 2rem;
`;

const MovieProductionWrapper = styled.div`
  margin-bottom: 4rem;
`;

const MovieProductionCompany = styled.ul``;

const MovieItemProduction = styled.li`
  font-size: 1.6rem;
  font-weight: 100;
  display: block;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

// ========================== STYLES:END ========================== //

const MovieProduction = ({ companies }) => {
  if (companies.length === 0) return null;

  return (
    <MovieProductionWrapper>
      <MovieSubTitle>Production Companies</MovieSubTitle>
      <MovieProductionCompany>
        {companies.map(({ name, id }) => (
          <MovieItemProduction key={id}>{name}</MovieItemProduction>
        ))}
      </MovieProductionCompany>
    </MovieProductionWrapper>
  );
};

export default MovieProduction;
