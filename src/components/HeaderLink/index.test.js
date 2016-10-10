/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import HeaderLink from './index';

describe('HeaderLink', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<HeaderLink />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
