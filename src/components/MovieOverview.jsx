import React from 'react';
import styled from 'styled-components';

// ========================== STYLES:BEGIN ========================== //

const MovieOverviewWrapper = styled.div`
  margin: 4rem 0;
  opacity: 1;
`;

const MovieSubTitle = styled.h3`
  font-size: 1.8rem;
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 2rem;
`;

const MovieOverviewText = styled.p`
  font-size: 1.6rem;
  font-weight: 100;
  width: 70%;
  line-height: 1.8em;
`;

// ========================== STYLES:END ========================== //

const MovieOverview = ({ overview }) => {
  return (
    <MovieOverviewWrapper>
      <MovieSubTitle>Overview</MovieSubTitle>
      {overview ? (
        <MovieOverviewText>{overview}</MovieOverviewText>
      ) : (
        <MovieOverviewText>There's no overview</MovieOverviewText>
      )}
    </MovieOverviewWrapper>
  );
};

export default MovieOverview;
