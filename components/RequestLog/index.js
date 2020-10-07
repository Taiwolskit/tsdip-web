import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import MaterialTable from 'material-table';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

import { withTranslation } from '../../i18n';
import { ContextStore } from '../../ctx';
import axios from '../../lib/axios';

const RequestLog = () => {
  const { accessToken } = useContext(ContextStore);
  const headers = {
    Authorization: `Bearer ${accessToken}`,
    'x-api-token': 'tsdip',
  };

  const columns = [
    { title: 'Name', field: 'org_name' },
    {
      title: 'Organization Type',
      field: 'org_type',
      lookup: {
        dance_group: 'Dance Group',
        studio: 'Studio',
      },
    },
    {
      title: 'Request Type',
      field: 'req_type',
      lookup: {
        apply_org: 'Apply',
        claim_org: 'Claim',
      },
    },
    {
      title: 'Approve Status',
      field: 'approve_at',
      type: 'boolean',
    },
  ];

  const eventColumns = [
    { title: 'Name', field: 'event_name' },
    {
      title: 'Request Type',
      field: 'req_type',
      lookup: {
        apply_event: 'Apply',
      },
    },
    {
      title: 'Approve Status',
      field: 'approve_at',
      type: 'boolean',
    },
  ];

  const actions = [
    (rowData) => ({
      name: 'approve',
      icon: CheckCircleIcon,
      tooltip: 'Approve',
      onClick: (event, rowData) => alert(JSON.stringify(rowData, null, 2)),
      hidden: rowData.approve_at !== undefined,
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
    <div>
      <MaterialTable
        title='Organization Requests'
        columns={columns}
        data={getOrgRequests}
        actions={actions}
      />
      <MaterialTable
        title='Event Requests'
        columns={eventColumns}
        data={getEventRequests}
        actions={actions}
      />
    </div>
  );
};

// RequestLog.propTypes = {
//   t: PropTypes.func.isRequired,
// };

export default RequestLog;
