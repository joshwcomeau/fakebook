// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { css } from 'aphrodite';

import SpriteIcon from '../SpriteIcon';
import styles from './styles';


const Tab = ({ isSelected, label, subLabel, to }) => {
  const icon = isSelected && (
    <SpriteIcon name="profileTabNub" mergeStyles={styles.selectedNub} />
  );

  return (
    <li className={css(styles.tab, isSelected && styles.selected)}>
      {icon}
      <Link to={to} className={css(styles.tabLink)}>
        <span className={css(styles.label, isSelected && styles.selectedLabel)}>
          {label}
        </span>
        <span className={css(styles.subLabel)}>{subLabel}</span>
      </Link>
    </li>
  );
};

Tab.propTypes = {

};

Tab.defaultProps = {

};

export default Tab;
