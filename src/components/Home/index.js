// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { css } from 'aphrodite';

import styles from './styles';


const Home = () => {
  return (
    <div className={css(styles.home)}>
      Your Component Here :)
    </div>
  );
};

Home.propTypes = {

};

Home.defaultProps = {

};

export default Home;
