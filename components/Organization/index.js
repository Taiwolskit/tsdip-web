import React, { useContext } from 'react';
import Router from 'next/router';
import PropTypes from 'prop-types';
import MaterialTable from 'material-table';
import AddBoxIcon from '@material-ui/icons/AddBox';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PersonAddDisabledIcon from '@material-ui/icons/PersonAddDisabled';

import { withTranslation } from '../../i18n';
import { ContextStore } from '../../ctx';
import axios from '../../lib/axios';

const generateColumn = (userType, t) => {
  let columns, actions;
  if (userType === 'user') {
    columns = [
      { title: t('table-header-name'), field: 'name' },
      {
        title: t('table-header-role'),
        field: 'role',
        lookup: {
          owner: t('table-field-role-owner'),
          manager: t('table-field-role-manager'),
          viewer: t('table-field-role-viewer'),
        },
      },
      {
        title: t('table-header-org-type'),
        field: 'org_type',
        lookup: {
          dance_group: t('table-field-org-type-group'),
          studio: t('table-field-org-type-studio'),
        },
      },
    ];

    actions = [
      {
        icon: AddBoxIcon,
        tooltip: t('table-action-add-tooltip'),
        isFreeAction: true,
        onClick: (event) => Router.push('/edit/organization'),
      },
      (rowData) => ({
        icon: PersonAddIcon,
        tooltip: t('table-action-invite-tooltip'),
        onClick: (event, rowData) =>
          confirm('You want to delete ' + rowData.name),
        hidden: rowData.role === 'viewer',
      }),
      (rowData) => ({
        icon: PersonAddDisabledIcon,
        tooltip: t('table-action-leave-tooltip'),
        onClick: (event, rowData) =>
          confirm('You want to delete ' + rowData.name),
        hidden: rowData.role === 'owner',
      }),
      (rowData) => ({
        icon: 'delete',
        tooltip: t('table-action-delete-tooltip'),
        onClick: (event, rowData) =>
          confirm('You want to delete ' + rowData.name),
        hidden: rowData.role !== 'owner',
      }),
    ];
  } else if (userType === 'manager') {
    columns = [
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

    actions = [
      {
        name: 'add',
        icon: AddBoxIcon,
        tooltip: t('table-action-add-tooltip'),
        isFreeAction: true,
        onClick: (event) => Router.push('/edit/organization'),
      },
      (rowData) => ({
        icon: 'delete',
        tooltip: t('table-action-delete-tooltip'),
        onClick: (event, rowData) =>
          confirm('You want to delete ' + rowData.name),
      }),
    ];
  }

  return { columns, actions };
};

const renderTable = (userType, t, getOrg, getReviewOrg) => {
  const { columns, actions } = generateColumn(userType, t);

  if (userType === 'user') {
    return (
      <div style={{ paddingBottom: 20 }}>
        <MaterialTable
          title={t('table-title')}
          columns={columns}
          data={getOrg}
          actions={actions}
        />
        <br />
        <br />
        <MaterialTable
          title={t('table-title')}
          columns={columns}
          data={getReviewOrg}
          actions={actions}
        />
      </div>
    );
  } else if (userType === 'manager') {
    return (
      <MaterialTable
        title={t('table-title')}
        columns={columns}
        data={getOrg}
        actions={actions}
      />
    );
  } else {
    return <div>No data</div>;
  }
};

const Organization = ({ t }) => {
  const { accessToken, user } = useContext(ContextStore);
  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };
  const userType = user.type;

  const getReviewOrg = async (query) => {
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
          reviewing: true,
        },
      });

      return {
        data: items,
        page: page - 1,
        totalCount: total,
      };
    } catch (error) {
      console.error(`_get_reviewing_orgs_fail_ ${JSON.stringify(error)}`);
    }
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

  return renderTable(userType, t, getOrg, getReviewOrg);
};

Organization.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('org')(Organization);
