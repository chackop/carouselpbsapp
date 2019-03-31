import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Test Carousel', () => {
  const wrapper = shallow(<App />);
  wrapper.find('[id="nextItem"]').simulate('click');
  expect(wrapper.find('[className="carousel-slider active-slide-1"]')).toBeTruthy();
});