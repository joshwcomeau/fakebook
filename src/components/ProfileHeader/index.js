// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { css } from 'aphrodite';

import defaultAvatar from '../../images/default-avatar.png';
import Button from '../Button';
import CoverPhoto from '../CoverPhoto';
import styles from './styles';


const ProfileHeader = ({ profile }) => {
  const { fullName, userName, profilePhoto, coverPhoto } = profile;

  return (
    <div
      className={css(
        styles.profileHeader,
        coverPhoto && styles.tallProfileHeader
      )}
    >
      {!!coverPhoto && <CoverPhoto photo={coverPhoto} />}

      <div className={css(styles.profilePhotoContainer)}>
        <img
          src={profilePhoto}
          alt="User avatar"
          className={css(styles.profilePhoto)}
        />
      </div>

      <Link to={`/${userName}`} className={css(styles.fullName)}>
        {fullName}
      </Link>

      <div className={css(styles.actions)}>
        <Button theme="light" onClick={function() {}}>
          Update Info
        </Button>
      </div>
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
