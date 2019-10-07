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

  &:not(:last-child) {
    margin-bottom: 3rem;
  }
`;

const MainLink = styled(Link)`
  &:link,
  &:visited {
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
