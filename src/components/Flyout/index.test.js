/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import Flyout from './index';

describe('Flyout', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Flyout />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
