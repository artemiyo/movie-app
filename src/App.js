import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Sidebar from './containers/Sidebar';
import SearchBar from './components/SearchBar';
import Liked from './components/Liked';
import Loader from './components/Loader';

import Discover from './containers/Discover';
import Genre from './containers/Genre';
import Search from './containers/Search';
import Movie from './containers/Movie';

import { fetchGenresStart } from './redux/navigation/navigationActions';

import { selectIsNavigationLoading } from './redux/navigation/navigationSelectors';
import { selectMovieItem } from './redux/movie/movieSelectors';
import MoviesItem from './components/MovieItem';

// ========================== STYLES:BEGIN ========================== //
const MainWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.colors.body};
`;

const MoviesWrapper = styled.div`
  width: 80%;
  padding: 5rem;
  /* background: ${props => props.theme.colors.body}; */
	background: ${props => {
    if (props.movieItem) {
      return `radial-gradient(
			circle, 
			rgba(${props.theme.colors.radial}, 0.9) 0%, 
			rgba(${props.theme.colors.radial}, 0.9) 100%), 
			url(https://image.tmdb.org/t/p/original/${props.movieItem.backdrop_path}) ;
			background-size: cover
			background-repeat: no-repeat`;
    } else {
      return `${props.theme.colors.body}`;
    }
  }};
  margin-left: 20%;
`;

const MoviesListWrapper = styled.div`
  position: relative;
`;

const SearchPanel = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5rem;
`;
// ========================== STYLES:END ========================== //

function App({ isLoading, fetchGenresStart, movieItem }) {
  useEffect(() => {
    fetchGenresStart();
  }, []);
  return isLoading ? (
    <MainWrapper>
      <Loader />
    </MainWrapper>
  ) : (
    <div className='App'>
      <MainWrapper>
        <Sidebar />
        <MoviesWrapper movieItem={movieItem}>
          <SearchPanel>
            <SearchBar />
            <Liked />
          </SearchPanel>{' '}
          <MoviesListWrapper>
            <Switch>
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/`}
                render={() => (
                  <Redirect
                    from={`${process.env.PUBLIC_URL}/`}
                    to={`${process.env.PUBLIC_URL}/discover/popular`}
                  />
                )}
              />{' '}
              <Route
                path={`${process.env.PUBLIC_URL}/discover/:name`}
                component={Discover}
              />{' '}
              <Route
                path={`${process.env.PUBLIC_URL}/genres/:name`}
                component={Genre}
              />{' '}
              <Route
                path={`${process.env.PUBLIC_URL}/search/:query`}
                component={Search}
              />{' '}
              <Route
                path={`${process.env.PUBLIC_URL}/movie/:id`}
                component={Movie}
              />{' '}
            </Switch>{' '}
          </MoviesListWrapper>{' '}
        </MoviesWrapper>{' '}
      </MainWrapper>{' '}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsNavigationLoading,
  movieItem: selectMovieItem
});

export default connect(
  mapStateToProps,
  {
    fetchGenresStart
  }
)(App);
