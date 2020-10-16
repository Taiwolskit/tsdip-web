import React from 'react';
import Header from './index';
import { ContextStore } from '../../ctx';

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

export const StateHeader = (args) => (
  <ContextStore.Provider value={{ accessToken: 'test', dispatch: () => '' }}>
    <Header {...args} />
  </ContextStore.Provider>
);
