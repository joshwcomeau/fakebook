// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { css } from 'aphrodite';

import MaxWidthWrapper from '../MaxWidthWrapper';
import styles from './styles';


const Header = () => {
  return (
    <div className={css(styles.headerContainer)}>
      <div className={css(styles.header)}>
        <MaxWidthWrapper>
          Hello!
        </MaxWidthWrapper>
      </div>
    </div>
  );
};

Header.propTypes = {

};

Header.defaultProps = {

};

export default Header;
