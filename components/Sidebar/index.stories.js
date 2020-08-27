import React from 'react';
import Sidebar from './index';

export default {
  title: 'Sidebar',
  component: Sidebar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    // Now all Button stories will be primary.
    primary: true,
  },
};

export const Basic = (args) => <Sidebar {...args} />;

Basic.story = {
  name: 'Sidebar',
};

Basic.args = {
  label: 'hello',
};
