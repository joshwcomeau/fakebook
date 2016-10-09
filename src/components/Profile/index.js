// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { css } from 'aphrodite';

import styles from './styles';


const Profile = () => {
  return (
    <div className={css(styles.profile)}>
      Your Component Here :)
    </div>
  );
};

Profile.propTypes = {

};

Profile.defaultProps = {

};

export default Profile;
