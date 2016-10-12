// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { css } from 'aphrodite';

import styles from './styles';


const CoverPhoto = ({ photo, mergeStyles }) => {
  return (
    <div
      className={css(styles.coverPhoto, mergeStyles)}
      style={{ backgroundImage: `url(${photo})` }}
    >
      <div className={css(styles.gradient)} />
    </div>
  );
};

CoverPhoto.propTypes = {
  photo: PropTypes.string.isRequired,
  mergeStyles: PropTypes.object,
};

CoverPhoto.defaultProps = {

};

export default CoverPhoto;
