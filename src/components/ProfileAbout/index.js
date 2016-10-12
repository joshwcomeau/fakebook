// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { css } from 'aphrodite';

import styles from './styles';


const ProfileAbout = () => {
  return (
    <div className={css(styles.profileAbout)}>
      Your Component Here :)
    </div>
  );
};

ProfileAbout.propTypes = {

};

ProfileAbout.defaultProps = {

};

export default ProfileAbout;
