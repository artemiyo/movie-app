import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const stayInTouchItems = ['Trending', 'Top Rated', 'Upcoming'];

const NavigationWrapper = styled.div``;

const Heading = styled.h5`
  font-size: 1.2rem;
  font-weight: 100;
  opacity: 0.5;
  text-transform: uppercase;
  margin-bottom: 3rem;
`;

const StayInTouchBlock = styled.div`
  margin-top: 8rem;
`;

const NavListItem = styled.li`
  display: block;
  position: relative;
  cursor: pointer;

  &:hover:after {
    width: 80%;
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
    margin-bottom: 2rem;
  }
`;

const MainLink = styled(Link)`
  &:link,
  &:visited {
    display: block;
    font-size: 1.6rem;
    text-transform: uppercase;
    color: var(--color-main);
    text-decoration: none;
  }
`;

const GenreLink = styled(Link)``;

const Navigation = () => {
  return (
    <NavigationWrapper>
      <StayInTouchBlock>
        <Heading>Stay in Touch</Heading>
        <nav>
          <ul>
            {stayInTouchItems.map((item, id) => (
              <NavListItem key={id}>
                <MainLink to={`/movie/${item.toLowerCase()}`}>{item}</MainLink>
              </NavListItem>
            ))}
          </ul>
        </nav>
      </StayInTouchBlock>
    </NavigationWrapper>
  );
};

export default Navigation;
