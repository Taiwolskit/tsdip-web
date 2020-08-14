import React from 'react';
import { mount } from 'enzyme';
import { I18nextProvider } from 'react-i18next';
import IndexPage from '../pages/index';
import Header from '../components/Header';
import i18n from '../i18n';

describe('Pages', () => {
    describe('Index', () => {
        test('should render without throwing an error', () => {
            const wrap = mount(<IndexPage />);
            // expect(wrap.find('button').text()).toBe('Hello Next.js');
            expect(wrap.contains(<Header />)).to.equal(true);
        });

        test('should render without throwing an error', () => {
            const wrap = mount(<IndexPage />);
            expect(wrap.find('button').text()).not.toBe('Hellos Next.js');
        })
    });
});