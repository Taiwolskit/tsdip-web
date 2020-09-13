import React, { useState, useEffect } from 'react';
import Router from 'next/router';
import PropTypes from 'prop-types';
import MaterialTable from 'material-table';
import GetApp from '@material-ui/icons/GetApp';
import AddBox from '@material-ui/icons/AddBox';

import { withTranslation } from '../../i18n';
import axios from '../../lib/axios';

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

  useEffect(() => {
    const getEvents = async () => {
      try {
        const {
          data: {
            data: { items },
          },
        } = await axios.get(
          '/organizations/558d1889-fff0-4f3e-9026-26fb1291b6b6/events'
        );

        setEvent(
          items.map((item) => ({
            title: item.name,
            editor: 'Baran',
            approve: item.approve_at !== null,
            updatedAt: new Date(item.updated_at),
            publishedAt: new Date(),
          }))
        );
      } catch (error) {
        console.error(`Get events API fail ${JSON.stringify(error)}`);
      }
    };

    getEvents();
  }, []);

  const [events, setEvent] = useState([]);

  return (
    <MaterialTable
      title={t('event:table-title')}
      columns={columns}
      data={events}
      options={{ selection: true }}
      actions={actions}
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

export default withTranslation('event')(Event);
