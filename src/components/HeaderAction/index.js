// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { css } from 'aphrodite';

import {
  toggleHeaderActionFlyout
} from '../../actions';
import SpriteIcon from '../SpriteIcon';
import styles from './styles';


const HeaderAction = ({ actionName, badgeNum, toggleHeaderActionFlyout }) => {
  const badge = !!badgeNum && (
    <div className={css(styles.badge)}>
      {badgeNum}
    </div>
  );

  return (
    <div className={css(styles.headerAction)}>
      <button
        className={css(styles.iconContainer)}
        onClick={() => toggleHeaderActionFlyout(actionName)}
      >
        {badge}
        <SpriteIcon name={actionName} mergeStyles={styles.icon} />
      </button>
    </div>
  );
};

HeaderAction.propTypes = {
  actionName: PropTypes.string.isRequired,
  badgeNum: PropTypes.number,
  toggleHeaderActionFlyout: PropTypes.func,
};

const mapStateToProps = (state, ownProps) => ({
  // TODO: Badge number
  badgeNum: Math.floor(Math.random() * 10),
});

export default connect(
  mapStateToProps,
  {
    toggleHeaderActionFlyout
  }
)(HeaderAction);
