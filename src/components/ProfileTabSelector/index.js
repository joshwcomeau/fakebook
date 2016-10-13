// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';

import TabSelector from '../TabSelector';
import styles from './styles';


const ProfileTabSelector = ({ userName, location, numOfFriends }) => {
  const { pathname } = location;

  const urlPrefix = `/${userName}`;

  // The selected tab is just the final part of the pathname.
  // eg. fakebook.com/josh/friends -> `friends`
  const selectedTab = pathname.split(userName)
    .reverse()[0]
    .replace('/', '');

  const tabs = [
    {
      label: 'Timeline',
      id: 'timeline',
      isDefault: true,
      to: urlPrefix,
    }, {
      label: 'About',
      id: 'about',
      to: urlPrefix + '/about',
    }, {
      label: 'Friends',
      id: 'friends',
      subLabel: numOfFriends.toString(),
      to: urlPrefix + '/friends',
    }, {
      label: 'Photos',
      id: 'photos',
      to: urlPrefix + '/photos',
    },
  ];

  return (
    <TabSelector
      tabs={tabs}
      selectedTab={selectedTab}
      mergeStyles={styles.profileTabSelector}
    />
  );
};

ProfileTabSelector.propTypes = {
  numOfFriends: PropTypes.number.isRequired,
  userName: PropTypes.string.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

ProfileTabSelector.defaultProps = {

};

export default ProfileTabSelector;
