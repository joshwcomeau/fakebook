/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import ProfileTimelineIntro from './index';

describe('ProfileTimelineIntro', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<ProfileTimelineIntro />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
