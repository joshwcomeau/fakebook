/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import ProfileHeader from './index';

describe('ProfileHeader', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<ProfileHeader />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
