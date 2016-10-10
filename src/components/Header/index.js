// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { css } from 'aphrodite';

import HeaderActionIcon from '../HeaderActionIcon';
import HeaderDivider from '../HeaderDivider';
import HeaderLink from '../HeaderLink';
import MaxWidthWrapper from '../MaxWidthWrapper';
import SquareLogo from '../SquareLogo';
import styles from './styles';


const Header = () => {
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
              <HeaderActionIcon iconName="friends" />
              <HeaderActionIcon iconName="messages" />
              <HeaderActionIcon iconName="notifications" />
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
    </div>
  );
};

Header.propTypes = {

};

Header.defaultProps = {

};

export default Header;
