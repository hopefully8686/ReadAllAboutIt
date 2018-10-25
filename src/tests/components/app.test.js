import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

import App from '../../components/app';

describe('App', () => {
  beforeEach(() => {
    component = shallow(<App />);
  });

  it('renders an App snapshot', () => {
    const tree = toJson(App);
    expect(tree).toMatchSnapshot();
  });
});