/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import IconListItem from './index';

describe('IconListItem', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<IconListItem />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
