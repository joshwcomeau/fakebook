// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { css } from 'aphrodite';

import {
  toggleFlyout,
  markAllMessagesAsRead,
  markAllNotificationsAsRead,
} from '../../actions';
import { stopPropagation } from '../../utils/event.utils';

import FlyoutHeader from '../FlyoutHeader';
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
class Flyout extends Component {
  renderNub() {
    let offset;
    const { activeFlyout } = this.props;

    switch (activeFlyout) {
      case 'notifications':
        offset = 14;
        break;
      case 'messages':
        offset = 48;
        break;
      case 'friends':
        offset = 84;
        break;
      default: throw new Error(`Unsupported activeFlyout of ${activeFlyout}`)
    }

    return (
      <div className={css(styles.nub)} style={{ right: offset }} />
    )
  }

  renderHeader() {
    const {
      markAllMessagesAsRead,
      markAllNotificationsAsRead,
      activeFlyout,
    } = this.props;

    switch (activeFlyout) {
      case 'notifications':
        return (
          <FlyoutHeader
            actions={[
              {
                label: 'Mark All as Read',
                callback: markAllNotificationsAsRead,
              }
            ]}
          >
            Notifications
          </FlyoutHeader>
        );
      case 'messages':
        // TODO: Fetch actual number of unread messages
        return (
          <FlyoutHeader
            actions={[{
              label: 'Mark All as Read',
              callback: markAllMessagesAsRead,
            }, {
              label: 'New Message',
              linkTo: '/messages/new',
            }]}
          >
            Recent (12)
          </FlyoutHeader>
        );
      case 'friends':
        return (
          <FlyoutHeader>
            Friend Requests
          </FlyoutHeader>
        );
      default: throw new Error(`Unsupported activeFlyout of ${activeFlyout}`)
    }
  }

  renderList() {
    return <h4>List here</h4>
  }

  renderSeeAll() {
    return <h3>See All</h3>
  }

  render() {
    return (
      <div
        className={css(styles.flyout)}
        onClick={stopPropagation}
      >
        {this.renderNub()}
        {this.renderHeader()}
        {this.renderList()}
        {this.renderSeeAll()}
      </div>
    );
  }
}

Flyout.propTypes = {
  activeFlyout: PropTypes.oneOf([
    'friends',
    'messages',
    'notifications'
  ]).isRequired,
  toggleFlyout: PropTypes.func.isRequired,
};

Flyout.defaultProps = {

};

const mapStateToProps = state => ({
  activeFlyout: state.ui.headerActions.activeFlyout,
})

export default connect(
  mapStateToProps,
  {
    toggleFlyout,
    markAllMessagesAsRead,
    markAllNotificationsAsRead,
  }
)(Flyout);
