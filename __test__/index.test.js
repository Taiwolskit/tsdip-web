import React from 'react';
import { mount } from 'enzyme';
import IndexPage from '../pages/index';
import Header from '../components/Header';

describe('Pages', () => {
  describe('Index', () => {
    test('should render without throwing an error', () => {
      const wrap = mount(<IndexPage />);
      expect(wrap.contains(<Header />)).toEqual(true);
    });
  });
});
