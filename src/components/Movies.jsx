import React from 'react';
import styled from 'styled-components';

import MoviesItem from './MoviesItem';
import Search from './Search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Liked from './Liked';

const MoviesWrapper = styled.div`
  width: 80%;
  padding: 6rem;
  background-color: var(--color-body);
  margin-left: 20%;
`;

const CategoryHeading = styled.h1`
  font-size: 2.5rem;
  font-weight: 400;
  text-transform: uppercase;
`;

const MoviesList = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 6rem;
`;

const SearchPanel = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 6rem;
`;

// Component
const Movies = () => {
  return (
    <MoviesWrapper>
      <SearchPanel>
        <Search />
        <Liked />
      </SearchPanel>
      <CategoryHeading>Trending</CategoryHeading>
      <MoviesList>
        <MoviesItem />
        <MoviesItem />
        <MoviesItem />
        <MoviesItem />
        <MoviesItem />
        <MoviesItem />
        <MoviesItem />
        <MoviesItem />
        <MoviesItem />
        <MoviesItem />
      </MoviesList>
    </MoviesWrapper>
  );
};

export default Movies;
