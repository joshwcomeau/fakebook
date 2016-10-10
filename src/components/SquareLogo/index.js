// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { css } from 'aphrodite';

import styles from './styles';


const SquareLogo = ({ mergeStyles }) => {
  return (
    <Link to="/" className={css(styles.squareLogoContainer, mergeStyles)}>
      <span className={css(styles.squareLogo)} />
    </Link>
  );
};

SquareLogo.propTypes = {
  mergeStyles: PropTypes.object,
};

SquareLogo.defaultProps = {

};

export default SquareLogo;
