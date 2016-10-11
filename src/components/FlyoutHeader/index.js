// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { css } from 'aphrodite';

import styles from './styles';


const FlyoutHeader = ({ children, action, actionText }) => {
  const actionElement = action && (
    <button className={css(styles.action)} onClick={action}>
      {actionText}
    </button>
  );

  return (
    <div className={css(styles.flyoutHeader)}>
      <h4 className={css(styles.heading)}>
        {children}
      </h4>

      {actionElement}
    </div>
  );
};

FlyoutHeader.propTypes = {
  children: PropTypes.node.isRequired,
  action: PropTypes.function,
  actionText: PropTypes.string,
};

export default FlyoutHeader;
