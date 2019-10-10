import React from 'react';
import styled from 'styled-components';
import { Route, Switch, Redirect } from 'react-router-dom';

import Sidebar from './containers/Sidebar';
import Search from './components/Search';
import Liked from './components/Liked';

import Discover from './containers/Discover';

// ========================== STYLES:BEGIN ========================== //
const MainWrapper = styled.div`
  height: 100%;
  display: flex;
  position: relative;
`;

const MoviesWrapper = styled.div`
  width: 80%;
  padding: 6rem;
  background-color: var(--color-body);
  margin-left: 20%;
`;

const SearchPanel = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 6rem;
`;
// ========================== STYLES:END ========================== //

function App() {
  return (
    <div className='App'>
      <MainWrapper>
        <Sidebar />
        <MoviesWrapper>
          <SearchPanel>
            <Search />
            <Liked />
          </SearchPanel>
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
          </Switch>
        </MoviesWrapper>
      </MainWrapper>
    </div>
  );
}

export default App;
