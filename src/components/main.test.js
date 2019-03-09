import React from 'react';
import { shallow } from 'enzyme';
import Main from './main';

describe('HomePage Component', () => {
  it('should render the Landing Page', () => {
    const component = shallow(<Main />);
    expect(component.exists()).toBe(true);
    expect(component).toMatchSnapshot();
  });
});
