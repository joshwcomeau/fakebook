// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { css } from 'aphrodite';
import sampleSize from 'lodash.samplesize';

import Card from '../Card';
import CardHeader from '../CardHeader';
import ProfileTimelineFriendSquare from '../ProfileTimelineFriendSquare';
import styles from './styles';


const ProfileTimelineFriends = ({ friendProfiles, numOfFriends }) => {
  return (
    <Card>
      <CardHeader icon="pinkFriends" subHeader={numOfFriends}>
        Friends
      </CardHeader>

      {friendProfiles.map(profile => (
        <ProfileTimelineFriendSquare
          key={profile.id}
          profile={profile}
        />
      ))}
    </Card>
  );
};

ProfileTimelineFriends.propTypes = {

};

const mapStateToProps = state => {
  const friendProfileIds = sampleSize(Object.keys(state.profiles.byId), 9);
  console.log(state.profiles.byId, friendProfileIds);

  return {
    friendProfiles: friendProfileIds.map(profileId => (
      state.profiles.byId[profileId]
    )),
    numOfFriends: 213,
  }
};

export default connect(mapStateToProps)(ProfileTimelineFriends);
