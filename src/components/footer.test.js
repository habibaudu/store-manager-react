import React from 'react';
import { shallow } from 'enzyme';
import Footer from './footer';

describe('HomePage Component', () => {
  it('should render the footer Page', () => {
    const component = shallow(<Footer />);
    expect(component.exists()).toBe(true);
    expect(component).toMatchSnapshot();
  });
});
