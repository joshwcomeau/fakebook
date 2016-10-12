/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import ProfileTabSelector from './index';

describe('ProfileTabSelector', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<ProfileTabSelector />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
