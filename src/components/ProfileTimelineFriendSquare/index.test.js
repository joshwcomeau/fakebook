/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import ProfileTimelineFriendSquare from './index';

describe('ProfileTimelineFriendSquare', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<ProfileTimelineFriendSquare />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
