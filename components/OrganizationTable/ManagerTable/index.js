import React, { useContext } from 'react';
import Router from 'next/router';
import PropTypes from 'prop-types';
import MaterialTable from 'material-table';
import AddBoxIcon from '@material-ui/icons/AddBox';

import { ContextStore } from '../../../ctx';
import { withTranslation } from '../../../i18n';
import { tableLocalization } from '../../../lib/parse';
import axios from '../../../lib/axios';

const ManagerTable = ({ t }) => {
  const { accessToken } = useContext(ContextStore);
  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };

  const getOrg = async (query) => {
    const { page: current_page, pageSize } = query;

    try {
      const {
        data: {
          data: { page = 1, total = 0, items = [] },
        },
      } = await axios.get('/organizations', {
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
      console.error(`_get_orgs_fail_ ${JSON.stringify(error)}`);
    }
  };

  const columns = [
    { title: t('table-header-name'), field: 'name' },
    {
      title: t('table-header-org-type'),
      field: 'org_type',
      lookup: {
        dance_group: t('table-field-org-type-group'),
        studio: t('table-field-org-type-studio'),
      },
    },
  ];

  const actions = [
    {
      name: 'add',
      icon: AddBoxIcon,
      tooltip: t('table-action-add-tooltip'),
      isFreeAction: true,
      onClick: () => Router.push('/edit/organization'),
    },
    (rowData) => ({
      icon: 'delete',
      tooltip: t('table-action-delete-tooltip'),
      onClick: (event, rowData) =>
        confirm('You want to delete ' + rowData.name),
    }),
  ];

  return (
    <MaterialTable
      title={t('table-title')}
      columns={columns}
      data={getOrg}
      actions={actions}
      localization={tableLocalization(t)}
    />
  );
};

ManagerTable.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation(['org', 'table'])(ManagerTable);
