/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import CardHeader from './index';

describe('CardHeader', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<CardHeader />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
