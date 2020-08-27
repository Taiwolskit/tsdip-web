import React from 'react';
import Sidebar from './index';

export default {
  title: 'Sidebar',
  component: Sidebar,
};

export const Basic = (args) => <Sidebar {...args} />;

Basic.story = {
  name: 'Sidebar',
};

Basic.args = {
  label: 'hello',
};
