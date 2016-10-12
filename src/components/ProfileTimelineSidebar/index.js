// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { css } from 'aphrodite';

import { currentProfileSelector } from '../../reducers/profiles.reducer';
import Card from '../Card';
import CardHeader from '../CardHeader';
import HorizontalRule from '../HorizontalRule';
import styles from './styles';


const ProfileTimelineSidebar = ({ profile, mergeStyles }) => {
  const { intro, work, education, currentCity, homeCity } = profile;

  return (
    <div className={css(styles.sideColumn, mergeStyles)}>
      <Card>
        <CardHeader icon="blueWorld">Intro</CardHeader>
        <p className={css(styles.introParagraph)}>{intro}</p>

        <HorizontalRule />

        <ul>

        </ul>


      </Card>
    </div>
  );
};

ProfileTimelineSidebar.propTypes = {
  profile: PropTypes.shape({
    intro: PropTypes.string,
    work: PropTypes.arrayOf(PropTypes.shape({
      role: PropTypes.string.isRequired,
      company: PropTypes.string.isRequired,
      isCurrent: PropTypes.bool,
    })),
    education: PropTypes.arrayOf(PropTypes.shape({
      school: PropTypes.string.isRequired,
      level: PropTypes.string.isRequired,
    })),
    currentCity: PropTypes.string,
    homeCity: PropTypes.string,
  }),
};

ProfileTimelineSidebar.defaultProps = {

};

const mapStateToProps = state => ({
  profile: currentProfileSelector(state),
});

export default connect(mapStateToProps)(ProfileTimelineSidebar);
