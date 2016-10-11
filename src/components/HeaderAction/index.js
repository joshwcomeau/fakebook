// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { css } from 'aphrodite';

import {
  toggleFlyout
} from '../../actions';
import { stopPropagation } from '../../utils/event.utils';

import SpriteIcon from '../SpriteIcon';
import styles from './styles';


const HeaderAction = ({
  actionName,
  isActive,
  badgeNum,
  toggleFlyout,
}) => {
  const badge = !!badgeNum && (
    <div className={css(styles.badge)}>
      {badgeNum}
    </div>
  );

  // The icon may be light or dark, depending on whether it's active.
  const iconName = isActive ? `${actionName}Light` : `${actionName}Dark`

  return (
    <div className={css(styles.headerAction)}>
      <button
        className={css(styles.iconContainer)}
        onClick={ev => {
          stopPropagation(ev);
          toggleFlyout(actionName)
        }}
      >
        {badge}
        <SpriteIcon
          name={iconName}
          mergeStyles={isActive ? styles.iconActive : styles.iconInactive}
        />
      </button>
    </div>
  );
};

HeaderAction.propTypes = {
  actionName: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  badgeNum: PropTypes.number,
  toggleFlyout: PropTypes.func,
};

const mapStateToProps = (state, ownProps) => ({
  isActive: ownProps.actionName === state.ui.headerActions.activeFlyout,
  // TODO: Badge number
  badgeNum: Math.floor(Math.random() * 10),
});

export default connect(
  mapStateToProps,
  {
    toggleFlyout
  }
)(HeaderAction);
