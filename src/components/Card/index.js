// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { css } from 'aphrodite';

import styles from './styles';


const Card = ({ children }) => {
  return (
    <div className={css(styles.card)}>
      { children }
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node,
};

Card.defaultProps = {

};

export default Card;
