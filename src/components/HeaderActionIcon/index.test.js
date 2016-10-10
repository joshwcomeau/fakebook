/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import HeaderActionIcon from './index';

describe('HeaderActionIcon', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<HeaderActionIcon />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
