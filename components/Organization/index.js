import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import MaterialTable from 'material-table';
import AddBox from '@material-ui/icons/AddBox';
import PersonAdd from '@material-ui/icons/PersonAdd';
import PersonAddDisabledIcon from '@material-ui/icons/PersonAddDisabled';

import { withTranslation } from '../../i18n';
import { ContextStore } from '../../ctx';
import axios from '../../lib/axios';

const Organization = ({ t }) => {
  const { accessToken } = useContext(ContextStore);
  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };

  const columns = [
    { title: t('org:table-header-name'), field: 'name' },
    { title: t('org:table-header-role'), field: 'role' },
    {
      title: '類別',
      field: 'org_type',
      lookup: { dance_group: 'Dance Group', studio: 'Studio' },
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
      hidden: rowData.role === 'viewer',
    }),
    (rowData) => ({
      icon: PersonAddDisabledIcon,
      tooltip: t('org:table-action-leave-tooltip'),
      onClick: (event, rowData) =>
        confirm('You want to delete ' + rowData.name),
      hidden: rowData.role === 'owner',
    }),
    (rowData) => ({
      icon: 'delete',
      tooltip: t('org:table-action-delete-tooltip'),
      onClick: (event, rowData) =>
        confirm('You want to delete ' + rowData.name),
      hidden: rowData.role !== 'owner',
    }),
  ];

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
      console.error(`Get user profile failed ${JSON.stringify(error)}`);
    }
  };

  return (
    <MaterialTable
      title='Organizations'
      columns={columns}
      data={getOrg}
      actions={actions}
    />
  );
};

Organization.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('org')(Organization);
