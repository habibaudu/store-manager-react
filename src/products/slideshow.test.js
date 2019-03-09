import React from 'react';
import { shallow } from 'enzyme';
import SlideShowComponent from './SlideShowComponent';

describe('App', () => {
  it('should render App', () => {
    const component = shallow(<SlideShowComponent />);
    expect(component.exists()).toBe(true);
    expect(component).toMatchSnapshot();
  });
});
