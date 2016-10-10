/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import MaxWidthWrapper from './index';

describe('MaxWidthWrapper', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<MaxWidthWrapper />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
