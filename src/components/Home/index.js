// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

import './index.css';


const Home = () => {
  const classes = classNames('home');

  return (
    <div className={classes}>
      Your Component Here :)
    </div>
  );
};

Home.propTypes = {

};

Home.defaultProps = {

};

export default Home;
