// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { css } from 'aphrodite';

import { currentUserSelector } from '../../reducers/auth.reducer';

import HeaderAction from '../HeaderAction';
import Flyout from '../Flyout';
import HeaderDivider from '../HeaderDivider';
import HeaderLink from '../HeaderLink';
import MaxWidthWrapper from '../MaxWidthWrapper';
import SquareLogo from '../SquareLogo';

import styles from './styles';


const Header = ({
  activeFlyout,
  currentUser,
  toggleFlyout,
}) => {
  let headerNavigation;
  if (currentUser) {
    headerNavigation = (
      <div className={css(styles.headerNavigation)}>
        <div className={css(styles.headerNavigationChunk)}>
          <HeaderLink
            to={`/${currentUser.userName}`}
            label={currentUser.firstName}
            imageSrc={currentUser.profilePhoto}
          />
          <HeaderDivider />
          <HeaderLink to="/" label="Home" />
        </div>

        <div className={css(styles.headerNavigationChunk)}>
          <HeaderAction actionName="friends" />
          <HeaderAction actionName="messages" />
          <HeaderAction actionName="notifications" />
        </div>
      </div>
    )
  }

  return (
    <div className={css(styles.headerContainer)}>
      <div className={css(styles.header)}>
        <MaxWidthWrapper mergeStyles={styles.headerContents}>
          <div className={css(styles.headerSearch)}>
            <SquareLogo mergeStyles={styles.logo} />
            <input className={css(styles.searchInput)} />
          </div>

          {headerNavigation}

          {activeFlyout && <Flyout />}
        </MaxWidthWrapper>
      </div>
    </div>
  );
};

Header.propTypes = {
  activeFlyout: PropTypes.string,
  currentUser: PropTypes.shape({
    userName: PropTypes.string,
    firstName: PropTypes.string,
    profilePhoto: PropTypes.string,
  }),
};


const mapStateToProps = state => ({
  activeFlyout: state.ui.headerActions.activeFlyout,
  currentUser: currentUserSelector(state),
});

export default connect(mapStateToProps)(Header);
