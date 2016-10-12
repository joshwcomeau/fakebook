/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import ProfileTimelineIconList from './index';

describe('ProfileTimelineIconList', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<ProfileTimelineIconList />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
