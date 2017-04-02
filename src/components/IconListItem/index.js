// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { css } from 'aphrodite';

import SpriteIcon from '../SpriteIcon';
import styles from './styles';


const IconListItem = ({ icon, prefix, subject, subjectHref, target }) => {
  return (
    <li className={css(styles.iconListItem)}>
      <SpriteIcon name={icon} mergeStyles={styles.icon} />
      {prefix}
      {' '}
      <Link
        to={subjectHref}
        target={target}
        rel="noopener"
      >
        {subject}
      </Link>
    </li>
  )

};

IconListItem.propTypes = {
  icon: PropTypes.string,
  prefix: PropTypes.string,
  subject: PropTypes.string,
  subjectHref: PropTypes.string,
  target: PropTypes.string,
};

IconListItem.defaultProps = {
  target: '_blank',
};

export default IconListItem;
