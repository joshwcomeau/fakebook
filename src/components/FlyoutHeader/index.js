// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { css } from 'aphrodite';

import styles from './styles';


const FlyoutHeader = ({ children, actions }) => {
  const actionsElement = actions.map(({ label, callback, linkTo }, i) => {
    // This action will either invoke a callback (likely an action dispatcher),
    // or send the user to a new page.
    let action;

    if (callback) {
      action = (
        <button className={css(styles.action)} onClick={callback}>
          {label}
        </button>
      )
    } else {
      action = <Link to={linkTo} className={css(styles.action)}>{label}</Link>;
    }

    return <li key={i} className={css(styles.actionContainer)}>{action}</li>
  });

  return (
    <div className={css(styles.flyoutHeader)}>
      <h4 className={css(styles.heading)}>
        {children}
      </h4>

      <ul className={css(styles.actions)}>
        {actionsElement}
      </ul>
    </div>
  );
};

FlyoutHeader.propTypes = {
  children: PropTypes.node.isRequired,
  actions: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    callback: PropTypes.func,
    linkTo: PropTypes.string,
  })),
};

FlyoutHeader.defaultProps = {
  actions: [],
};

export default FlyoutHeader;
