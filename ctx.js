import React, { createContext } from 'react';

const ContextStore = createContext({
  token: undefined,
});

export default ContextStore;
