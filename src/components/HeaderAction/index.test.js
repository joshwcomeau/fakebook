/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import HeaderAction from './index';

describe('HeaderAction', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<HeaderAction />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
