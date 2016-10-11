/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import WindowEvents from './index';

describe('WindowEvents', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<WindowEvents />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
