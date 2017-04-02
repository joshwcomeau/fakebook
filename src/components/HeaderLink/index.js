// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { css } from 'aphrodite';

import styles from './styles';


const HeaderLink = ({ label, to, imageSrc, mergeStyles }) => {
  const image = imageSrc && (
    <img
      src={imageSrc}
      role="presentation"
      className={css(styles.image)}
    />
  )
  return (
    <Link to={to} className={css(styles.headerLink, mergeStyles)}>
      {image}
      {label}
    </Link>
  );
};

HeaderLink.propTypes = {
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  imageSrc: PropTypes.string,
  mergeStyles: PropTypes.object,
};

HeaderLink.defaultProps = {

};

export default HeaderLink;
