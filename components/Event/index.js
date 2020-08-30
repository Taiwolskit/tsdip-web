import React from 'react';
import Router from 'next/router';
import PropTypes from 'prop-types';
import MaterialTable from 'material-table';
import GetApp from '@material-ui/icons/GetApp';
import AddBox from '@material-ui/icons/AddBox';

import { withTranslation } from '../../i18n';

const Event = ({ t }) => {
  const columns = [
    { title: t('event:table-header-title'), field: 'title' },
    { title: t('event:table-header-editor'), field: 'editor' },
    {
      title: t('event:table-header-approve'),
      field: 'approve',
      type: 'boolean',
    },
    {
      title: t('event:table-header-lastUpdate'),
      field: 'updatedAt',
      type: 'datetime',
    },
    {
      title: t('event:table-header-publish'),
      field: 'publishedAt',
      type: 'datetime',
    },
  ];

  const actions = [
    {
      name: 'edit',
      icon: 'edit',
      tooltip: t('event:table-action-edit-tooltip'),
      onClick: (event, rowData) => alert(JSON.stringify(rowData, null, 2)),
      position: 'row',
    },
    {
      name: 'add',
      icon: AddBox,
      tooltip: t('event:table-action-add-tooltip'),
      isFreeAction: true,
      onClick: (event) => Router.push('/edit/event'),
    },
    {
      name: 'publish',
      icon: 'publish',
      tooltip: t('event:table-action-publish-tooltip'),
      onClick: (event, rowData) => alert(JSON.stringify(rowData, null, 2)),
    },
    {
      name: 'unpublish',
      icon: GetApp,
      tooltip: t('event:table-action-unpublish-tooltip'),
      onClick: (event, rowData) => alert(JSON.stringify(rowData, null, 2)),
    },
  ];

  const [state, setState] = React.useState({
    data: [
      {
        title: 'Mehmet',
        editor: 'Baran',
        approve: true,
        updatedAt: new Date(),
        publishedAt: new Date(),
      },
      {
        title: 'Zerya Betül',
        editor: 'Baran',
        approve: false,
        updatedAt: new Date(),
        publishedAt: new Date(),
      },
    ],
  });

  return (
    <MaterialTable
      title={t('event:table-title')}
      columns={columns}
      data={state.data}
      options={{ selection: true }}
      actions={actions}
      editable={{
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
};

Event.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('event')(Event);
