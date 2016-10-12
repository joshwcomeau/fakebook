/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import TabSelector from './index';

describe('TabSelector', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<TabSelector />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
