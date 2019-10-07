import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';

import store from './redux/store';
import theme from './utils/theme';
import GlobalStyles from './utils/globals';
import { ThemeProvider } from 'styled-components';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <ThemeProvider theme={theme}>
        <App />
        <GlobalStyles />
      </ThemeProvider>
    </Router>
  </Provider>,
  document.getElementById('root')
);
