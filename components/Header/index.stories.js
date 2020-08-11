import React from 'react';
import Header from './index';

export default {
  title: 'Header',
  component: Header,
};

export const HeaderNav = () => <Header />;

HeaderNav.story = {
  name: 'Header Navs',
};
