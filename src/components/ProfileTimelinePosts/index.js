// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { css } from 'aphrodite';

import Card from '../Card';
import CardHeader from '../CardHeader';
import HorizontalRule from '../HorizontalRule';
import styles from './styles';


const ProfileTimelinePosts = ({ mergeStyles }) => {
  return (
    <div className={css(styles.mainColumn, mergeStyles)}>
      <Card>Main Col</Card>
    </div>  );
};

ProfileTimelinePosts.propTypes = {
  mergeStyles: PropTypes.object,
};

ProfileTimelinePosts.defaultProps = {

};

export default ProfileTimelinePosts;
