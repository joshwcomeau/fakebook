// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { css } from 'aphrodite';

import styles from './styles';


const ProfileTimelineFriendSquare = ({ profile }) => {
  const { profilePhoto, firstName, lastName } = profile;

  return (
    <Link
      to={`/${profile.userName}`}
      className={css(styles.profileTimelineFriendSquare)}
      style={{ backgroundImage: `url(${profilePhoto})` }}
    >
      <div className={css(styles.friendName)}>
        {firstName} {lastName}
      </div>
    </Link>
  );
};

ProfileTimelineFriendSquare.propTypes = {

};

ProfileTimelineFriendSquare.defaultProps = {

};

export default ProfileTimelineFriendSquare;
