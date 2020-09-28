import React from 'react';
import PropTypes from 'prop-types';
import MaterialTable from 'material-table';
import AddBox from '@material-ui/icons/AddBox';
import PersonAdd from '@material-ui/icons/PersonAdd';
import PersonAddDisabledIcon from '@material-ui/icons/PersonAddDisabled';

import { withTranslation } from '../../i18n';

const Organization = ({ t }) => {
  const columns = [
    { title: t('org:table-header-name'), field: 'name' },
    { title: t('org:table-header-role'), field: 'role' },
    {
      title: t('org:table-header-approve'),
      field: 'approve',
      type: 'boolean',
    },
  ];

  const actions = [
    {
      name: 'add',
      icon: AddBox,
      tooltip: t('org:table-action-add-tooltip'),
      isFreeAction: true,
      onClick: (event) => Router.push('/edit/organization'),
    },
    (rowData) => ({
      icon: PersonAdd,
      tooltip: t('org:table-action-invite-tooltip'),
      onClick: (event, rowData) =>
        confirm('You want to delete ' + rowData.name),
      disabled: rowData.birthCity > 40,
    }),
    (rowData) => ({
      icon: PersonAddDisabledIcon,
      tooltip: t('org:table-action-leave-tooltip'),
      onClick: (event, rowData) =>
        confirm('You want to delete ' + rowData.name),
      disabled: rowData.birthCity > 40,
    }),
    (rowData) => ({
      icon: 'delete',
      tooltip: t('org:table-action-delete-tooltip'),
      onClick: (event, rowData) =>
        confirm('You want to delete ' + rowData.name),
      disabled: rowData.birthCity < 2000,
    }),
  ];

  return (
    <MaterialTable
      title='Free Action Preview'
      columns={columns}
      data={[
        { name: 'Mehmet', role: 'Baran', approve: true, birthCity: 63 },
        {
          name: 'Zerya Betül',
          role: 'Baran',
          approve: false,
          birthCity: 34,
        },
      ]}
      actions={actions}
    />
  );
};

Organization.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('org')(Organization);
