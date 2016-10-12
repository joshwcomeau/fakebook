// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { css } from 'aphrodite';
import sampleSize from 'lodash.samplesize';

import {
  currentProfileSelector,
  currentProfileFriendsSelector,
} from '../../reducers/profiles.reducer';
import Card from '../Card';
import CardHeader from '../CardHeader';
import CardBody from '../CardBody';
import Clearfix from '../Clearfix';
import ProfileTimelineFriendSquare from '../ProfileTimelineFriendSquare';
import styles from './styles';


const ProfileTimelineFriends = ({ friendProfiles, numOfFriends }) => {
  return (
    <Card>
      <CardHeader icon="pinkFriends" subHeader={numOfFriends}>
        Friends
      </CardHeader>

      <CardBody mergeStyles={styles.cardBodyForTable}>
        <Clearfix>
          {friendProfiles.map(profile => (
            <ProfileTimelineFriendSquare
              key={profile.id}
              profile={profile}
            />
          ))}
        </Clearfix>
      </CardBody>
      <div style={{ clear: 'both' }} />
    </Card>
  );
};

const mapStateToProps = state => {
  return {
    friendProfiles: currentProfileFriendsSelector(state),
    numOfFriends: currentProfileSelector(state).numOfFriends,
  }
};

export default connect(mapStateToProps)(ProfileTimelineFriends);
