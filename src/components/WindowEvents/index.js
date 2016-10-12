// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { toggleFlyout } from '../../actions';


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
    if (this.props.isFlyoutActive) {
      this.props.toggleFlyout(null);
    }
  }

  render() {
    return null;
  }
};

WindowEvents.propTypes = {
  toggleFlyout: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isFlyoutActive: state.ui.headerActions.activeFlyout !== null,
});

export default connect(mapStateToProps, { toggleFlyout })(WindowEvents);
