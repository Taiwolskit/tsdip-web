import React from 'react';
import Header from './index';

export default {
  title: 'Header',
  component: Header,
};

export const Basic = (args) => <Header {...args} />;

Basic.story = {
  name: 'Header',
};

Basic.args = {
  label: 'hello',
};
