// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { logInRequest } from '../../actions';


class App extends Component {
  componentDidMount() {
    // We're going to assume, for simplicity, that the user's auth
    // token was persisted in localStorage, and this is a returning visit.
    // In the future, it may be nice to add a "logged out" state, but
    // it's a lot of additional but straightforward complexity. It
    // doesn't seem like the best use of my time.

    // This is what it would be in a real app:
    // const authToken = localStorage.getItem('fb__auth_token');
    const authToken = 'abc123';

    if (authToken) {
      this.props.logInRequest({ authToken });
    }
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
};

App.propTypes = {
  children: PropTypes.node,
};

export default connect(null, { logInRequest })(App);
