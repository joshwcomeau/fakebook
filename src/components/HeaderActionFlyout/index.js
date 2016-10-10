// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { css } from 'aphrodite';

import {
  toggleHeaderActionFlyout
} from '../../actions';
import styles from './styles';


// This Flyout can exist with 3 different types of items:
// - Messages
// - Friend Requests
// - notifications
//
// Each one requires customization with these aspects:
// - The ListItem type
// - The heading of the flyout
// - the actions available ("Mark all as read", etc)
// - the place to go when "See All" is clicked.
// - the position of the nub on top, indicating which is active
//
// The best way to deal with situations like this, I've found, is to
// isolate the creation of each section into a method, that switches
// on the various supported types.
class HeaderActionFlyout extends Component {
  renderNub() {

  }

  renderHeader() {
    return <h1>Hi</h1>;
  }

  renderList() {
    return <h4>List here</h4>
  }

  renderSeeAll() {
    return <h3>See All</h3>
  }

  render() {
    return (
      <div className={css(styles.headerActionFlyout)}>
        {this.renderNub()}
        {this.renderHeader()}
        {this.renderList()}
        {this.renderSeeAll()}
      </div>
    );
  }
}

HeaderActionFlyout.propTypes = {
  activeFlyout: PropTypes.oneOf([
    'friends',
    'messages',
    'notifications'
  ]).isRequired,
  toggleHeaderActionFlyout: PropTypes.func.isRequired,
};

HeaderActionFlyout.defaultProps = {

};

const mapStateToProps = state => ({
  activeFlyout: state.ui.headerActions.activeFlyout,
})

export default connect(
  mapStateToProps,
  { toggleHeaderActionFlyout }
)(HeaderActionFlyout);
