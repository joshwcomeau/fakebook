// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Match, Miss } from 'react-router';
import { css } from 'aphrodite';

import { viewProfilePage } from '../../actions';
import {
  currentProfileWithExtrasSelector,
} from '../../reducers/profiles.reducer';

import MaxWidthWrapper from '../MaxWidthWrapper';
import ProfileHeader from '../ProfileHeader';
import ProfileTabSelector from '../ProfileTabSelector';
import styles from './styles';


class Profile extends Component {
  componentDidMount() {
    this.props.viewProfilePage({ userName: this.props.params.userName });
  }

  render() {
    const { profile } = this.props;

    console.log(this.props);

    if (typeof profile === 'undefined') {
      // This means we're still loading our main profile info.
      // Don't bother rendering anything (except maybe a spinner?)
      return null;
    }

    if (profile === null) {
      // If the profile is `null`, it means that it wasn't able to be found.
      // TODO: Display a 404-type component.
      return null;
    }

    return (
      <MaxWidthWrapper mergeStyles={styles.profile}>
        <ProfileHeader profile={this.props.profile}/>
        <ProfileTabSelector
          userName={this.props.params.userName}
          location={this.props.location}
          numOfFriends={this.props.profile.friendIds.length}
        />
      </MaxWidthWrapper>
    );
  }
};

Profile.propTypes = {

};

Profile.defaultProps = {

};

const mapStateToProps = state => ({
  profile: currentProfileWithExtrasSelector(state),
});

export default connect(mapStateToProps, { viewProfilePage })(Profile);
