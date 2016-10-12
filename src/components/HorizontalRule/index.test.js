/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import HorizontalRule from './index';

describe('HorizontalRule', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<HorizontalRule />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
