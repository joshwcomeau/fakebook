// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { css } from 'aphrodite';

import MaxWidthWrapper from '../MaxWidthWrapper';
import styles from './styles';


const Home = () => {
  return (
    <div className={css(styles.home)}>
      <MaxWidthWrapper>
        Hello!
      </MaxWidthWrapper>
    </div>
  );
};

Home.propTypes = {

};

Home.defaultProps = {

};

export default Home;
