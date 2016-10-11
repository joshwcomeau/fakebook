// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { css } from 'aphrodite';

import { viewProfilePage } from '../../actions';
import MaxWidthWrapper from '../MaxWidthWrapper';
import ProfileHeader from '../ProfileHeader';
import styles from './styles';


class Profile extends Component {
  componentDidMount() {
    this.props.viewProfilePage({ userName: this.props.params.userName })
  }

  render() {
    return (
      <MaxWidthWrapper mergeStyles={styles.profile}>
        <ProfileHeader />
      </MaxWidthWrapper>
    );
  }
};

Profile.propTypes = {

};

Profile.defaultProps = {

};

export default connect(null, { viewProfilePage })(Profile);
