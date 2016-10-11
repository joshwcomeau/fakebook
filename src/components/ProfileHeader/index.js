// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { css } from 'aphrodite';

import defaultAvatar from '../../images/default-avatar.png';
import styles from './styles';


const ProfileHeader = ({ profile }) => {
  const { fullName, userName, profilePhoto, coverPhoto } = profile;

  return (
    <div className={css(styles.profileHeader)}>
      <div className={css(styles.profilePhotoContainer)}>
        <img src={profilePhoto} className={css(styles.profilePhoto)} />
      </div>

      <Link to={`/${userName}`} className={css(styles.fullName)}>
        {fullName}
      </Link>
    </div>
  );
};

ProfileHeader.propTypes = {
  profile: PropTypes.shape({
    fullName: PropTypes.string.isRequired,
    profilePhoto: PropTypes.string.isRequired,
    coverPhoto: PropTypes.string,
  }),
};

ProfileHeader.defaultProps = {
  profilePhoto: defaultAvatar,
};

export default ProfileHeader;
