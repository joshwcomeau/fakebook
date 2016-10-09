import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Match, Miss } from 'react-router';

import configureStore from './store';

import Home from './components/Home';
import Profile from './components/Profile';
import DevTools from './components/DevTools';


const store = configureStore();

render(
  <Provider store={store}>
    <Router>
      <div>
        <Match exactly pattern="/" component={Home} />
        <Miss component={Profile} />
        <DevTools />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
