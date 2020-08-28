import React from 'react';
import { mount } from 'enzyme';
import IndexPage from '../pages/index';
import Header from '../components/Header';
import Footer from '../components/Footer';

describe('Pages', () => {
  describe('Index', () => {
    test('Check Header component', () => {
      const wrap = mount(<IndexPage />);
      expect(wrap.contains(<Header />)).toEqual(true);
    });

    test('Check Footer component', () => {
      const wrap = mount(<IndexPage />);
      expect(wrap.contains(<Footer />)).toEqual(true);
    });
  });
});
