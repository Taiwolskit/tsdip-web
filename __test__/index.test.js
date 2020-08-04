import React from 'react';
import { mount } from 'enzyme';
import IndexPage from '../pages/index';

describe('Pages', () => {
    describe('Index', () => {
        test('should render without throwing an error', () => {
            const wrap = mount(<IndexPage />);
            expect(wrap.find('button').text()).toBe('Hello Next.js');
        });

        test('should render without throwing an error', () => {
            const wrap = mount(<IndexPage />);
            expect(wrap.find('button').text()).not.toBe('Hellos Next.js');
        })
    });
});