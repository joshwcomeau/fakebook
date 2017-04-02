// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { css } from 'aphrodite';

import { formatPostTimestamp } from '../../utils/time.utils';
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
        <div className={css(styles.title)}>
          <Link to={`/${userName}`} className={css(styles.authorName)}>
            {firstName} {lastName}
          </Link>
          {isShared && this.renderAttribution()}
        </div>
        <div className={css(styles.date)}>
          {formatPostTimestamp(new Date(timestamp))}
        </div>
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
