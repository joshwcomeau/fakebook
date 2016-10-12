import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Match } from 'react-router';

import configureStore from './store';

import Header from './components/Header';
import Home from './components/Home';
import Profile from './components/Profile';
import WindowEvents from './components/WindowEvents';
import DevTools from './components/DevTools';


const store = configureStore();

render(
  <Provider store={store}>
    <Router>
      <div>
        <Header />

        <Match exactly pattern="/" component={Home} />
        <Match pattern="/:userName" component={Profile} />

        <WindowEvents />

        <DevTools />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
