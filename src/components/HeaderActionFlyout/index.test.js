/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import HeaderActionFlyout from './index';

describe('HeaderActionFlyout', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<HeaderActionFlyout />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
