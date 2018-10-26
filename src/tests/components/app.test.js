import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

import App from '../../components/app';

describe('App', () => {
  let appComp;
  beforeEach(() => {
    appComp = shallow(<App />);
  });

  it('renders an App snapshot', () => {
    const tree = toJson(appComp);
    expect(tree).toMatchSnapshot();
  });
});