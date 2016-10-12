/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import ProfileTimelineFriends from './index';

describe('ProfileTimelineFriends', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<ProfileTimelineFriends />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
