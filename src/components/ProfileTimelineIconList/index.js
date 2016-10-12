// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { css } from 'aphrodite';

import { currentProfileSelector } from '../../reducers/profiles.reducer';

import IconList from '../IconList';
import styles from './styles';


const ProfileTimelineIconList = ({
  profile: {
    work,
    education,
    currentLocation,
    birthLocation,
  },
}) => {
  const aboutListItems = [];

  work.forEach(({ role, company, isCurrent }) => {
    const prefix = `${isCurrent ? 'Current' : 'Former'} ${role} at`;
    aboutListItems.push({
      icon: 'workProfile',
      prefix,
      subject: company,
      subjectHref: `https://www.google.com/search?q=${company}`,
    });
  });

  education.forEach(({ school, level }) => {
    const isPostSecondary = level === 'college' || level === 'university';
    const prefix = isPostSecondary ? 'Studied at' : 'Went to';
    aboutListItems.push({
      icon: 'schoolProfile',
      prefix,
      subject: school,
      subjectHref: `https://www.google.com/search?q=${school}`,
    })
  });

  aboutListItems.push({
    icon: 'homeProfile',
    prefix: 'Lives in',
    subject: `${currentLocation.city}, ${currentLocation.state}`,
    subjectHref: `https://www.google.ca/maps/place/${currentLocation.city},${currentLocation.state}`
  });

  aboutListItems.push({
    icon: 'mapPinProfile',
    prefix: 'From',
    subject: `${birthLocation.city}, ${birthLocation.state}`,
    subjectHref: `https://www.google.ca/maps/place/${birthLocation.city},${birthLocation.state}`
  });

  return (
    <IconList listItems={aboutListItems} />
  );
};

ProfileTimelineIconList.propTypes = {
  profile: PropTypes.shape({
    work: PropTypes.arrayOf(PropTypes.shape({
      role: PropTypes.string.isRequired,
      company: PropTypes.string.isRequired,
      isCurrent: PropTypes.bool,
    })),
    education: PropTypes.arrayOf(PropTypes.shape({
      school: PropTypes.string.isRequired,
      level: PropTypes.string.isRequired,
    })),
    currentLocation: PropTypes.shape({
      city: PropTypes.string,
      state: PropTypes.string,
    }),
    birthLocation: PropTypes.shape({
      city: PropTypes.string,
      state: PropTypes.string,
    }),
  }),
};

const mapStateToProps = state => ({
  profile: currentProfileSelector(state),
});

export default connect(mapStateToProps)(ProfileTimelineIconList);
