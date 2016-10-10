// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { css } from 'aphrodite';

import SpriteIcon from '../SpriteIcon';
import styles from './styles';


const HeaderActionIcon = ({ iconName, onClick }) => {
  return (
    <button className={css(styles.iconContainer)} onClick={onClick}>
      <SpriteIcon name={iconName} mergeStyles={styles.icon} />
    </button>
  );
};

HeaderActionIcon.propTypes = {
  iconName: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

HeaderActionIcon.defaultProps = {

};

export default HeaderActionIcon;
