// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { css } from 'aphrodite';

import styles from './styles';


const MaxWidthWrapper = ({ children, mergeStyles }) => {
  return (
    <div className={css(styles.maxWidthWrapper, mergeStyles)}>
      {children}
    </div>
  );
};

MaxWidthWrapper.propTypes = {
  children: PropTypes.node,
  mergeStyles: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
};

MaxWidthWrapper.defaultProps = {

};

export default MaxWidthWrapper;
