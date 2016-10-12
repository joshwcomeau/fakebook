/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import CardBody from './index';

describe('CardBody', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<CardBody />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
