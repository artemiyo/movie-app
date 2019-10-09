import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { stayInTouchItems, genres } from '../utils/data';

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

const renderCategories = (categories, categoryLink) => LinkWrapper => {
  return categories.map((category, id) => (
    <NavListItem key={id}>
      <LinkWrapper to={`/${categoryLink}/${category.toLowerCase()}`}>
        {category}
      </LinkWrapper>
    </NavListItem>
  ));
};

// Component

const Navigation = () => {
  return (
    <div>
      <StayInTouchBlock>
        <Heading>Stay in Touch</Heading>
        <nav>
          <ul>{renderCategories(stayInTouchItems, 'movie')(MainLink)}</ul>
        </nav>
      </StayInTouchBlock>
      <div>
        <Heading>Genres</Heading>
        <nav>
          <ul>{renderCategories(genres, 'genres')(GenreLink)}</ul>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
