/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import Card from './index';

describe('Card', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Card />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
