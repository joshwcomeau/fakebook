/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import ProfileTimelinePosts from './index';

describe('ProfileTimelinePosts', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<ProfileTimelinePosts />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
