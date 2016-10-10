/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import HeaderDivider from './index';

describe('HeaderDivider', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<HeaderDivider />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
