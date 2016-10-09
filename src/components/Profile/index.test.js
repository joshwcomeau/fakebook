/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import Profile from './index';

describe('Profile', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Profile />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
