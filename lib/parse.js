export function parseJwt(token) {
  return JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
}

export function tableLocalization(t) {
  return {
    body: {
      emptyDataSourceMessage: t('table:table-body-empty')
    },
    grouping: {
      groupedBy: t('table:table-group-groupBy'),
      placeholder: t('table:table-group-placeholder'),
    },
    header: {
      actions: t('table:table-column-action'),
    },
    pagination: {
      firstAriaLabel: t('table:table-pagination-first'),
      firstTooltip: t('table:table-pagination-first'),
      labelDisplayedRows: t('table:table-pagination-label-display'),
      labelRowsSelect: t('table:table-pagination-label-row'),
      lastAriaLabel: t('table:table-pagination-last'),
      lastTooltip: t('table:table-pagination-last'),
      nextAriaLabel: t('table:table-pagination-next'),
      nextTooltip: t('table:table-pagination-next'),
      previousAriaLabel: t('table:table-pagination-previous'),
      previousTooltip: t('table:table-pagination-previous'),
    },
    toolbar: {
      nRowsSelected: t('table:table-toolbar-row-selected'),
      searchPlaceholder: t('table:table-toolbar-search-placeholder'),
      searchTooltip: t('table:table-toolbar-search-tooltip'),
    },
  };
}
