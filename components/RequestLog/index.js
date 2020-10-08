import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import MaterialTable from 'material-table';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

import { ContextStore } from '../../ctx';
import { withTranslation } from '../../i18n';
import { tableLocalization } from '../../lib/parse';
import axios from '../../lib/axios';
import styles from './RequestLog.module.scss';

const RequestLog = ({ t }) => {
  const { accessToken } = useContext(ContextStore);
  const headers = {
    Authorization: `Bearer ${accessToken}`,
    'x-api-token': process.env.NEXT_PUBLIC_ADMIN_API_KEY,
  };

  const columns = [
    { title: t('request-table-column-name'), field: 'org_name' },
    {
      title: t('request-table-column-org-type'),
      field: 'org_type',
      lookup: {
        dance_group: t('request-table-column-org-group'),
        studio: t('request-table-column-org-studio'),
      },
    },
    {
      title: t('request-table-column-req-type'),
      field: 'req_type',
      lookup: {
        apply_org: t('request-table-column-req-apply'),
        claim_org: t('request-table-column-req-claim'),
      },
    },
    {
      title: t('request-table-column-approve-status'),
      field: 'approve_at',
      type: 'boolean',
    },
  ];

  const eventColumns = [
    { title: t('request-table-column-name'), field: 'event_name' },
    {
      title: t('request-table-column-req-type'),
      field: 'req_type',
      lookup: {
        apply_event: t('request-table-column-req-apply'),
      },
    },
    {
      title: t('request-table-column-approve-status'),
      field: 'approve_at',
      type: 'boolean',
    },
  ];

  const actions = [
    (rowData) => ({
      hidden: rowData.approve_at !== undefined,
      icon: CheckCircleIcon,
      name: 'approve',
      onClick: (event, rowData) => alert(JSON.stringify(rowData, null, 2)),
      tooltip: 'Approve',
    }),
  ];

  const getOrgRequests = async (query) => {
    const { page: current_page, pageSize } = query;

    try {
      const {
        data: {
          data: { page = 1, total = 0, items = [] },
        },
      } = await axios.get('/organizations/requests', {
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
      console.error(`_get_org_requests_fail_ ${JSON.stringify(error)}`);
    }
  };

  const getEventRequests = async (query) => {
    const { page: current_page, pageSize } = query;

    try {
      const {
        data: {
          data: { page = 1, total = 0, items = [] },
        },
      } = await axios.get('/events/requests', {
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
      console.error(`_get_event_requests_fail_ ${JSON.stringify(error)}`);
    }
  };

  return (
    <div className={styles['dashboard-request-log']}>
      <MaterialTable
        title={t('request-org-table-title')}
        columns={columns}
        data={getOrgRequests}
        actions={actions}
        options={{ grouping: true, search: true }}
        localization={tableLocalization(t)}
      />
      <MaterialTable
        title={t('request-event-table-title')}
        columns={eventColumns}
        data={getEventRequests}
        actions={actions}
        options={{ grouping: true, search: true }}
        localization={tableLocalization(t)}
      />
    </div>
  );
};

RequestLog.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation(['request-log', 'table'])(RequestLog);
