/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import ProfileTimelineSidebar from './index';

describe('ProfileTimelineSidebar', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<ProfileTimelineSidebar />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
