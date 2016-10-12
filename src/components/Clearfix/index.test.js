/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import Clearfix from './index';

describe('Clearfix', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Clearfix />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
