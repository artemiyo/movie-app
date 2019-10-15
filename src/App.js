import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Sidebar from './containers/Sidebar';
import Search from './components/Search';
import Liked from './components/Liked';
import Loader from './components/Loader';

import Discover from './containers/Discover';
import Genre from './containers/Genre';

import { fetchGenresStart } from './redux/navigation/navigationActions';

import { selectIsNavigationLoading } from './redux/navigation/navigationSelectors';

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
  background-color: ${props => props.theme.colors.body};
  margin-left: 20%;
`;

const MoviesListWrapper = styled.div`
  position: relative;
  min-height: 100vh;
`;

const SearchPanel = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5rem;
`;
// ========================== STYLES:END ========================== //

function App({ isLoading, fetchGenresStart }) {
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
        <MoviesWrapper>
          <SearchPanel>
            <Search />
            <Liked />
          </SearchPanel>
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
              />
              <Route
                path={`${process.env.PUBLIC_URL}/discover/:name`}
                component={Discover}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/genres/:name`}
                component={Genre}
              />
            </Switch>
          </MoviesListWrapper>
        </MoviesWrapper>
      </MainWrapper>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsNavigationLoading
});

export default connect(
  mapStateToProps,
  { fetchGenresStart }
)(App);
