// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

import './index.css';


const Profile = () => {
  const classes = classNames('profile');

  return (
    <div className={classes}>
      Your Component Here :)
    </div>
  );
};

Profile.propTypes = {

};

Profile.defaultProps = {

};

export default Profile;
