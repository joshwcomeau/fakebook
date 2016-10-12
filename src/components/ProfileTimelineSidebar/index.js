// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { css } from 'aphrodite';

import ProfileTimelineIntro from '../ProfileTimelineIntro';
import ProfileTimelineFriends from '../ProfileTimelineFriends';
import styles from './styles';

const ProfileTimelineSidebar = ({ mergeStyles }) => (
  <div className={css(styles.sideColumn, mergeStyles)}>
    <ProfileTimelineIntro />
    <ProfileTimelineFriends />
  </div>
)

ProfileTimelineSidebar.propTypes = {
  mergeStyles: PropTypes.object,
};

export default ProfileTimelineSidebar;
