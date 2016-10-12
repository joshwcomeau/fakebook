/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import IconList from './index';

describe('IconList', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<IconList />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
