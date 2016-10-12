/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import CoverPhoto from './index';

describe('CoverPhoto', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<CoverPhoto />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
