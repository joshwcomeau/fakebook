/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import ProfileTimeline from './index';

describe('ProfileTimeline', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<ProfileTimeline />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
