/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import Tab from './index';

describe('Tab', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Tab />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
