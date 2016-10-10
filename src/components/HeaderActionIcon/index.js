// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { css } from 'aphrodite';

import SpriteIcon from '../SpriteIcon';
import styles from './styles';


const HeaderActionIcon = ({ iconName, badgeNum, onClick }) => {
  const badge = badgeNum && (
    <div className={css(styles.badge)}>
      {badgeNum}
    </div>
  );

  return (
    <button className={css(styles.iconContainer)} onClick={onClick}>
      {badge}
      <SpriteIcon name={iconName} mergeStyles={styles.icon} />
    </button>
  );
};

HeaderActionIcon.propTypes = {
  iconName: PropTypes.string.isRequired,
  badgeNum: PropTypes.number,
  onClick: PropTypes.func,
};

HeaderActionIcon.defaultProps = {

};

export default HeaderActionIcon;
