/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import FlyoutHeader from './index';

describe('FlyoutHeader', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<FlyoutHeader />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
