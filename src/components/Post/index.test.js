/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import Post from './index';

describe('Post', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Post />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
