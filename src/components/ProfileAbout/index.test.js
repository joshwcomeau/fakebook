/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import ProfileAbout from './index';

describe('ProfileAbout', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<ProfileAbout />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
