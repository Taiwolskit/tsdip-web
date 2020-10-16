import React, { useContext } from 'react';
import Router from 'next/router';
import PropTypes from 'prop-types';
import MaterialTable from 'material-table';
import AddBoxIcon from '@material-ui/icons/AddBox';
import GetAppIcon from '@material-ui/icons/GetApp';

import { ContextStore } from '../../ctx';
import { withTranslation } from '../../i18n';
import { tableLocalization } from '../../lib/parse';
import axios from '../../lib/axios';

const generateColumn = (userType, t) => {
  let columns, actions;
  if (userType === 'user') {
    columns = [
      { title: t('table-header-org-name'), field: 'org_name' },
      { title: t('table-header-event-name'), field: 'name' },
      { title: t('table-header-editor'), field: 'username' },
      {
        title: t('table-header-lastUpdate'),
        field: 'updated_at',
        type: 'datetime',
      },
      {
        title: t('table-header-approve'),
        field: 'approve_at',
        type: 'boolean',
      },
      {
        title: t('table-header-publish'),
        field: 'published_at',
        type: 'datetime',
      },
    ];

    actions = [
      {
        name: 'edit',
        icon: 'edit',
        tooltip: t('table-action-edit-tooltip'),
        onClick: (event, rowData) => alert(JSON.stringify(rowData, null, 2)),
        position: 'row',
      },
      {
        name: 'add',
        icon: AddBoxIcon,
        tooltip: t('table-action-add-tooltip'),
        isFreeAction: true,
        onClick: (event) => Router.push('/edit/event'),
      },
      {
        name: 'publish',
        icon: 'publish',
        tooltip: t('table-action-publish-tooltip'),
        onClick: (event, rowData) => alert(JSON.stringify(rowData, null, 2)),
      },
      {
        name: 'unpublish',
        icon: GetAppIcon,
        tooltip: t('table-action-un-publish-tooltip'),
        onClick: (event, rowData) => alert(JSON.stringify(rowData, null, 2)),
      },
    ];
  } else if (userType === 'manager') {
    columns = [
      { title: t('table-header-org-name'), field: 'org_name' },
      { title: t('table-header-event-name'), field: 'name' },
      {
        title: t('table-header-lastUpdate'),
        field: 'updated_at',
        type: 'datetime',
      },
      {
        title: t('table-header-publish'),
        field: 'published_at',
        type: 'datetime',
      },
    ];

    actions = [
      {
        name: 'edit',
        icon: 'edit',
        tooltip: t('table-action-edit-tooltip'),
        onClick: (event, rowData) => alert(JSON.stringify(rowData, null, 2)),
        position: 'row',
      },
      {
        name: 'add',
        icon: AddBoxIcon,
        tooltip: t('table-action-add-tooltip'),
        isFreeAction: true,
        onClick: (event) => Router.push('/edit/event'),
      },
      {
        name: 'publish',
        icon: 'publish',
        tooltip: t('table-action-publish-tooltip'),
        onClick: (event, rowData) => alert(JSON.stringify(rowData, null, 2)),
      },
      {
        name: 'unpublish',
        icon: GetAppIcon,
        tooltip: t('table-action-un-publish-tooltip'),
        onClick: (event, rowData) => alert(JSON.stringify(rowData, null, 2)),
      },
    ];
  }

  return { columns, actions };
};

const Event = ({ t }) => {
  const { accessToken, user } = useContext(ContextStore);
  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };

  const { columns, actions } = generateColumn(user.type, t);

  const getEvents = async (query) => {
    const { page: current_page, pageSize } = query;

    try {
      const {
        data: {
          data: { page = 1, total = 0, items = [] },
        },
      } = await axios.get('/events', {
        headers,
        params: {
          limit: pageSize,
          page_size: pageSize,
          page: current_page + 1,
        },
      });

      return {
        data: items,
        page: page - 1,
        totalCount: total,
      };
    } catch (error) {
      console.error(`_get_events_fail_ ${JSON.stringify(error)}`);
    }
  };

  return (
    <MaterialTable
      title={t('table-title')}
      columns={columns}
      data={getEvents}
      options={{ selection: true }}
      actions={actions}
      localization={tableLocalization(t)}
      editable={{
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setEvent((prevState) => {
                const data = [...prevState];
                data.splice(data.indexOf(oldData), 1);
                return data;
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

export default withTranslation(['event', 'table'])(Event);
