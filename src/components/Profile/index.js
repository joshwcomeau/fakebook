// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import { viewProfilePage } from '../../actions';
import {
  currentProfileWithExtrasSelector,
} from '../../reducers/profiles.reducer';

import MaxWidthWrapper from '../MaxWidthWrapper';
import ProfileHeader from '../ProfileHeader';
import ProfileTabSelector from '../ProfileTabSelector';
import ProfileTimeline from '../ProfileTimeline';
import ProfileAbout from '../ProfileAbout';
import styles from './styles';


class Profile extends Component {
  componentDidMount() {
    this.props.viewProfilePage({ userName: this.props.match.params.userName });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.params.userName !== this.props.match.params.userName) {
      this.props.viewProfilePage({
        userName: this.props.match.params.userName,
      });
    }
  }

  render() {
    const {
      profile,
      location,
      match: { params },
    } = this.props;

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
        <ProfileHeader profile={profile}/>
        <ProfileTabSelector
          userName={params.userName}
          location={location}
          numOfFriends={profile.numOfFriends}
        />

        <Route exact path="/:userName/" component={ProfileTimeline} />
        <Route exact path="/:userName/about" component={ProfileAbout} />
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
