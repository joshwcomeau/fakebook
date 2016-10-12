// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { css } from 'aphrodite';

import Tab from '../Tab';
import styles from './styles';


const TabSelector = ({ tabs, selectedTab, mergeStyles }) => {
  const tabElements = tabs.map(tab => {
    const isExplicitlySelected = tab.id === selectedTab;
    const isSelectedByDefault = !selectedTab && tab.isDefault;

    return (
      <Tab
        {...tab}
        key={tab.id}
        isSelected={isExplicitlySelected || isSelectedByDefault}
      />
    );
  });

  return (
    <ul className={css(styles.tabSelector, mergeStyles)}>
      {tabElements}
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
