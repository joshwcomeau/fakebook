// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';

import IconListItem from '../IconListItem';


const IconList = ({ listItems }) => {
  const list = listItems.map(item => (
    <IconListItem key={item.prefix} {...item} />
  ));

  return <ul>{list}</ul>;
};

IconList.propTypes = {
  listItems: PropTypes.arrayOf(PropTypes.shape({
    icon: PropTypes.string,
    prefix: PropTypes.string,
    subject: PropTypes.string,
    subjectHref: PropTypes.string,
    target: PropTypes.string,
  })),
};

export default IconList;
