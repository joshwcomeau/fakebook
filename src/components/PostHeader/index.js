// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { css } from 'aphrodite';

import styles from './styles';


class PostHeader extends Component {
  renderAttribution() {
    // If this is shared from another user, we need to attribute them.
    // TODO
  }

  render() {
    const { author, timestamp, isShared } = this.props;
    const {
      firstName,
      lastName,
      userName,
      profilePhoto,
    } = author;

    return (
      <div className={css(styles.postHeader)}>
        <img src={profilePhoto} className={css(styles.profilePhoto)} />
        <span className={css(styles.title)}>
          <Link to={`/${userName}`}>{firstName} {lastName}</Link>
          {isShared && this.renderAttribution()}
        </span>
        <span className={css(styles.date)}>
          {new Date(timestamp).toString()}
        </span>
      </div>
    );
  }
};

PostHeader.propTypes = {
  author: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    profilePhoto: PropTypes.string,
  }).isRequired,
  timestamp: PropTypes.number.isRequired,
  isShared: PropTypes.bool,
};

PostHeader.defaultProps = {

};

export default PostHeader;
