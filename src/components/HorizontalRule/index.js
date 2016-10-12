// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { css } from 'aphrodite';

import styles from './styles';


const HorizontalRule = ({ mergeStyles }) => (
  <div className={css(styles.horizontalRule, mergeStyles)} />
)

HorizontalRule.propTypes = {
  mergeStyles: PropTypes.object,
};

export default HorizontalRule;
