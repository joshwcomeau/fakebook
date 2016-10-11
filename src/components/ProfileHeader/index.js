// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { css } from 'aphrodite';

import styles from './styles';


const ProfileHeader = () => {
  return (
    <div className={css(styles.profileHeader)}>
      Your Component Here :)
    </div>
  );
};

ProfileHeader.propTypes = {

};

ProfileHeader.defaultProps = {

};

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {})(ProfileHeader);
