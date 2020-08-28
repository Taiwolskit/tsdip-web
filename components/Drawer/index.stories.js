import React from 'react';
import Drawer from './index';

export default {
  title: 'Drawer',
  component: Drawer,
};

export const Basic = (args) => <Drawer {...args} />;

Basic.story = {
  name: 'Drawer',
};

Basic.args = {
  label: 'hello',
};
