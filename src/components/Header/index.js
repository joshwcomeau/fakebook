// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { css } from 'aphrodite';

import HeaderAction from '../HeaderAction';
import HeaderActionFlyout from '../HeaderActionFlyout';
import HeaderDivider from '../HeaderDivider';
import HeaderLink from '../HeaderLink';
import MaxWidthWrapper from '../MaxWidthWrapper';
import SquareLogo from '../SquareLogo';

import styles from './styles';


const Header = ({
  activeFlyout,
  toggleHeaderActionFlyout,
}) => {
  return (
    <div className={css(styles.headerContainer)}>
      <div className={css(styles.header)}>
        <MaxWidthWrapper mergeStyles={styles.headerContents}>
          <div className={css(styles.headerSearch)}>
            <SquareLogo mergeStyles={styles.logo} />
            <input className={css(styles.searchInput)} />
          </div>

          <div className={css(styles.headerNavigation)}>
            <div className={css(styles.headerNavigationChunk)}>
              <HeaderLink
                to="/josh"
                label="Joshua"
                imageSrc="https://placekitten.com/48/48"
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

          {activeFlyout && <HeaderActionFlyout />}
        </MaxWidthWrapper>
      </div>
    </div>
  );
};

Header.propTypes = {

};

const mapStateToProps = state => ({
  activeFlyout: state.ui.headerActions.activeFlyout,
})

export default connect(mapStateToProps)(Header);
