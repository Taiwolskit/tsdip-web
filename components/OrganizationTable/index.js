import React, { useContext } from 'react';

import { ContextStore } from '../../ctx';

import ManagerTable from './ManagerTable';
import UserTable from './UserTable';

const OrganizationTable = () => {
  const { user, dispatch } = useContext(ContextStore);

  if (user.type === 'manager') {
    return <ManagerTable />;
  } else if (user.type === 'user') {
    return <UserTable />;
  } else {
    dispatch({ type: 'LOGOUT' });
    return null;
  }
};

export default OrganizationTable;
