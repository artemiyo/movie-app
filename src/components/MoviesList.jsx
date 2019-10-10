import React from 'react';
import styled from 'styled-components';

import MovieItem from './MovieItem';

// ========================== STYLES:BEGIN ========================== //

const MovieList = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 6rem;
`;

// ========================== STYLES:BEGIN ========================== //

const MoviesList = () => {
  return (
    <MovieList>
      <MovieItem imgUrl='http://t1.gstatic.com/images?q=tbn:ANd9GcRvT1-_-HEbugPo6K_IPqx3tYSXDXOSzw9ZGeNOsB-iit8zf752' />
      <MovieItem imgUrl='http://kinohod.ru/o/9d/e1/9de1ae01-2003-47a9-81c4-5db56fff8fd6.jpg' />
      <MovieItem imgUrl='http://fr.web.img6.acsta.net/pictures/19/05/24/12/34/5876657.jpg' />
      <MovieItem imgUrl='https://images-na.ssl-images-amazon.com/images/I/91KkWf50SoL._SY445_.jpg' />
      <MovieItem imgUrl='http://fr.web.img6.acsta.net/pictures/19/05/24/12/34/5876657.jpg' />
      <MovieItem imgUrl='https://images-na.ssl-images-amazon.com/images/I/91KkWf50SoL._SY445_.jpg' />
      <MovieItem imgUrl='http://t1.gstatic.com/images?q=tbn:ANd9GcRvT1-_-HEbugPo6K_IPqx3tYSXDXOSzw9ZGeNOsB-iit8zf752' />
      <MovieItem imgUrl='http://kinohod.ru/o/9d/e1/9de1ae01-2003-47a9-81c4-5db56fff8fd6.jpg' />
      <MovieItem imgUrl='http://fr.web.img6.acsta.net/pictures/19/05/24/12/34/5876657.jpg' />
      <MovieItem imgUrl='https://images-na.ssl-images-amazon.com/images/I/91KkWf50SoL._SY445_.jpg' />
    </MovieList>
  );
};

export default MoviesList;
