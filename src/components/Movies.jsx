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
        <MoviesItem imgUrl='http://t1.gstatic.com/images?q=tbn:ANd9GcRvT1-_-HEbugPo6K_IPqx3tYSXDXOSzw9ZGeNOsB-iit8zf752' />
        <MoviesItem imgUrl='http://kinohod.ru/o/9d/e1/9de1ae01-2003-47a9-81c4-5db56fff8fd6.jpg' />
        <MoviesItem imgUrl='http://fr.web.img6.acsta.net/pictures/19/05/24/12/34/5876657.jpg' />
        <MoviesItem imgUrl='https://images-na.ssl-images-amazon.com/images/I/91KkWf50SoL._SY445_.jpg' />
        <MoviesItem imgUrl='http://fr.web.img6.acsta.net/pictures/19/05/24/12/34/5876657.jpg' />
        <MoviesItem imgUrl='https://images-na.ssl-images-amazon.com/images/I/91KkWf50SoL._SY445_.jpg' />
        <MoviesItem imgUrl='http://t1.gstatic.com/images?q=tbn:ANd9GcRvT1-_-HEbugPo6K_IPqx3tYSXDXOSzw9ZGeNOsB-iit8zf752' />
        <MoviesItem imgUrl='http://kinohod.ru/o/9d/e1/9de1ae01-2003-47a9-81c4-5db56fff8fd6.jpg' />
      </MoviesList>
    </MoviesWrapper>
  );
};

export default Movies;
