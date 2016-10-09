/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import Home from './index';

describe('Home', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
