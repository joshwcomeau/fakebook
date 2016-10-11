// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { css } from 'aphrodite';

import { toggleFlyout } from '../../actions';
import styles from './styles';


class WindowEvents extends Component {
  constructor(props) {
    super(props);

    this.windowClick = this.windowClick.bind(this);
  }

  componentDidMount() {
    window.addEventListener('click', this.windowClick);
  }

  componentWillUnmount() {

  }

  windowClick(ev) {
    // If we click anywhere except the Flyout, we want to close the Flyout.
    this.props.toggleFlyout(null);
  }

  render() {
    return null;
  }
};

WindowEvents.propTypes = {
  toggleFlyout: PropTypes.func.isRequired,
};

export default connect(null, { toggleFlyout })(WindowEvents);
