// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { css } from 'aphrodite';

import ProfileTimelineSidebar from '../ProfileTimelineSidebar';
import ProfileTimelinePosts from '../ProfileTimelinePosts';
import styles from './styles';


const ProfileTimeline = () => {
  return (
    <div className={css(styles.profileTimeline)}>
      <ProfileTimelineSidebar
        mergeStyles={styles.sideColumn}
      />
      <ProfileTimelinePosts
        mergeStyles={styles.mainColumn}
      />
    </div>
  );
};

export default ProfileTimeline;
