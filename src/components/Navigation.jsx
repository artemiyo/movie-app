import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { stayInTouchItems, genres } from '../utils/data';
import moviedbAPI from '../api/moviedbAPI';

import { fetchGenresStart } from '../redux/genres/genresActions';

const Heading = styled.h5`
  font-size: 1.2rem;
  font-weight: 100;
  opacity: 0.5;
  text-transform: uppercase;
  margin-bottom: 3rem;
`;

const Links = styled(Link)`
  &:link,
  &:visited {
    display: block;
    color: var(--color-main);
    text-decoration: none;
  }
`;

const StayInTouchBlock = styled.div`
  margin: 5rem 0;
`;

const NavListItem = styled.li`
  display: block;
  position: relative;
  cursor: pointer;

  &:hover:after {
    width: 70%;
  }

  &::after {
    position: absolute;
    content: '';
    bottom: -40%;
    left: -23%;
    width: 0%;
    height: 200%;
    z-index: -1;
    background: linear-gradient(
      to right,
      rgba(132, 142, 242, 1),
      rgba(132, 142, 242, 0.9),
      rgba(132, 142, 242, 0.8),
      rgba(132, 142, 242, 0.7),
      rgba(132, 142, 242, 0.6),
      rgba(132, 142, 242, 0.5),
      rgba(132, 142, 242, 0.4),
      rgba(132, 142, 242, 0.3),
      rgba(132, 142, 242, 0.2),
      rgba(132, 142, 242, 0.1),
      rgba(132, 142, 242, 0)
    );
    transition: width 0.3s ease;
  }

  &:not(:last-child) {
    margin-bottom: 1.5rem;
  }
`;

const MainLink = styled(Links)`
  &:link,
  &:visited {
    font-size: 1.6rem;
    font-weight: 800;
    text-transform: uppercase;
  }
`;

const GenreLink = styled(Links)`
  &:link,
  &:visited {
    font-size: 1.2rem;
    font-weight: 400;
  }
`;

const renderStatic = categories => LinkWrapper => {
  return categories.map((category, id) => (
    <NavListItem key={id}>
      <LinkWrapper
        to={`${process.env.PUBLIC_URL}/discover/${category.toLowerCase()}`}>
        {category}
      </LinkWrapper>
    </NavListItem>
  ));
};

const renderGenres = genres => LinkWrapper => {
  return genres.map(genre => (
    <NavListItem key={genre.id}>
      <LinkWrapper
        to={`${process.env.PUBLIC_URL}/genres/${genre.toLowerCase()}`}>
        {genre}
      </LinkWrapper>
    </NavListItem>
  ));
};

// Component

const Navigation = ({ fetchGenresStart }) => {
  useEffect(() => {
    // fetchGenresStart();
    console.log(
      moviedbAPI.get(`/genre/movie/list?api_key=${process.env.REACT_API_KEY}`)
    );
  });

  return (
    <div>
      <StayInTouchBlock>
        <Heading>Stay in Touch</Heading>
        <nav>
          <ul>{renderStatic(stayInTouchItems)(MainLink)}</ul>
        </nav>
      </StayInTouchBlock>
      <div>
        <Heading>Genres</Heading>
        <nav>
          <ul>{renderGenres(genres)(GenreLink)}</ul>
        </nav>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    genres: state.genresList
  };
};

const mapDispatchToProps = dispatch => ({
  fetchGenresStart: () => dispatch(fetchGenresStart())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation);
