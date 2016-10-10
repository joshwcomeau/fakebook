/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import SpriteIcon from './index';

describe('SpriteIcon', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<SpriteIcon />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
