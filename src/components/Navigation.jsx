import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';
import {
  selectGenresList,
  selectDiscoverList,
  selectGetSelectedMenu
} from '../redux/navigation/navigationSelectors';

import { getMenuId } from '../redux/navigation/navigationActions';

// ========================== STYLES:BEGIN ========================== //
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
    text-decoration: none;
  }
`;

const NavigationWrapper = styled.div`
  position: relative;
  opacity: 1;
`;

const Discover = styled.div`
  margin: 4rem 0;
`;

const NavListItem = styled.li`
  display: block;
  position: relative;
  cursor: pointer;

  & a {
    color: ${props => {
      if (props.selected === props.name.toLowerCase()) {
        return props.theme.colors.selected;
      } else {
        return props.theme.colors.main;
      }
    }};
  }

  &:hover a {
    color: ${props => props.theme.colors.hover};
  }

  &:not(:last-child) {
    margin-bottom: 1.6rem;
  }
`;

const DiscoverLink = styled(Links)`
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

// ========================== STYLES:END ========================== //

const renderNavigation = (
  categories,
  mainLink,
  selectedMenu,
  getMenuId
) => LinkWrapper => {
  return categories.map(({ name, id }) => (
    <NavListItem
      selected={selectedMenu}
      name={name}
      key={id}
      onClick={() => getMenuId(id)}>
      <LinkWrapper
        to={`${process.env.PUBLIC_URL}/${mainLink}/${name.toLowerCase()}`}>
        {name}
      </LinkWrapper>
    </NavListItem>
  ));
};

const Navigation = ({ genresList, discoverList, selectedMenu, getMenuId }) => {
  return (
    <NavigationWrapper>
      <Discover>
        <Heading>Discover</Heading>
        <nav>
          <ul>
            {renderNavigation(
              discoverList,
              'discover',
              selectedMenu,
              getMenuId
            )(DiscoverLink)}
          </ul>
        </nav>
      </Discover>
      <div>
        <Heading>Genres</Heading>
        <nav>
          <ul>
            {renderNavigation(genresList, 'genres', selectedMenu, getMenuId)(
              GenreLink
            )}
          </ul>
        </nav>
      </div>
    </NavigationWrapper>
  );
};

const mapStateToProps = createStructuredSelector({
  genresList: selectGenresList,
  discoverList: selectDiscoverList,
  selectedMenu: selectGetSelectedMenu
});

export default connect(
  mapStateToProps,
  { getMenuId }
)(Navigation);
