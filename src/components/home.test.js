import React from 'react';
import { shallow } from 'enzyme';
import Home from './home';

describe('HomePage Component', () => {
  it('should render the Landing Page', () => {
    const component = shallow(<Home />);
    expect(component.exists()).toBe(true);
    expect(component).toMatchSnapshot();
  });
});
