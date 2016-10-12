// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { css } from 'aphrodite';

import { currentProfileSelector } from '../../reducers/profiles.reducer';
import Card from '../Card';
import CardHeader from '../CardHeader';
import CardBody from '../CardBody';
import HorizontalRule from '../HorizontalRule';
import ProfileTimelineIconList from '../ProfileTimelineIconList';
import styles from './styles';

class ProfileTimelineIntro extends Component {
  render() {
    const { profile } = this.props;

    return (
      <Card>
        <CardHeader icon="blueWorld">Intro</CardHeader>
        <CardBody withPadding>
          <p className={css(styles.introParagraph)}>{profile.intro}</p>
          <HorizontalRule />
          <ProfileTimelineIconList />
        </CardBody>
      </Card>
    );
  }
}

ProfileTimelineIntro.propTypes = {
  profile: PropTypes.shape({
    intro: PropTypes.string,
  }),
};

const mapStateToProps = state => ({
  profile: currentProfileSelector(state),
});

export default connect(mapStateToProps)(ProfileTimelineIntro);
