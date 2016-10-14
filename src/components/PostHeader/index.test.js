/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import PostHeader from './index';

describe('PostHeader', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<PostHeader />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
