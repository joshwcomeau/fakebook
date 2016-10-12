// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { css } from 'aphrodite';

import styles from './styles';


const Button = ({ children, onClick, theme }) => {
  return (
    <button className={css(styles.button, styles[theme])} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  theme: PropTypes.oneOf(['light']),
};

Button.defaultProps = {

};

export default Button;
