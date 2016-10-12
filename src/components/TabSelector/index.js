// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { css } from 'aphrodite';

import Tab from '../Tab';
import styles from './styles';


const TabSelector = ({ tabs, selectedTab, mergeStyles }) => {
  return (
    <ul className={css(styles.tabSelector, mergeStyles)}>
      {tabs.map(tab => (
        <Tab
          {...tab}
          key={tab.id}
          isSelected={tab.id === selectedTab || !selectedTab && tab.isDefault}
        />
      ))}
    </ul>
  );
};

TabSelector.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    subLabel: PropTypes.string,
    to: PropTypes.string.isRequired,
  })),
};

TabSelector.defaultProps = {

};

export default TabSelector;
