import React from 'react';
import styled from 'styled-components';

import Container from './components/Container';
import Sidebar from './components/Sidebar';
import Movies from './components/Movies';

const MainWrapper = styled.div`
  height: 100%;
  display: flex;
  position: relative;
`;

function App() {
  return (
    <div className='App'>
      <Container>
        <MainWrapper>
          <Sidebar />
          <Movies />
        </MainWrapper>
      </Container>
    </div>
  );
}

export default App;
