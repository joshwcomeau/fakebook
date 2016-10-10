/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import SquareLogo from './index';

describe('SquareLogo', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<SquareLogo />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
