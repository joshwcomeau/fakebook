import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import configureStore from './store';

import App from './components/App';
import Header from './components/Header';
import Home from './components/Home';
import Profile from './components/Profile';
import WindowEvents from './components/WindowEvents';
import DevTools from './components/DevTools';


const store = configureStore();

render(
  <Provider store={store}>
    <Router>
      <App>
        <Header />

        <Route exact path="/" component={Home} />
        <Route path="/:userName" component={Profile} />

        <WindowEvents />

        <DevTools />
      </App>
    </Router>
  </Provider>,
  document.getElementById('root')
);
