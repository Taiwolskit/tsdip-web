import React from 'react';
import PropTypes from 'prop-types';
import MUIRichTextEditor from 'mui-rte';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import { withTranslation } from '../../../../i18n';
import styles from './Step1.module.scss';

const defaultTheme = createMuiTheme();

Object.assign(defaultTheme, {
  overrides: {
    MUIRichTextEditor: {
      container: {
        border: '5px solid gray',
        borderRadius: '5px',
        padding: '5px',
        height: '-webkit-fill-available',
      },
      toolbar: {
        borderBottom: '1px solid gray',
        display: 'flex',
        justifyContent: 'space-around',
      },
    },
  },
});

const fakeData = {
  blocks: [
    {
      key: '3fbbl',
      text: '測試測試',
      type: 'unstyled',
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {},
    },
    {
      key: '31bq5',
      text: '哈囉哈囉',
      type: 'unstyled',
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {},
    },
  ],
  entityMap: {},
};

const Step1 = ({ t }) => {
  return (
    <div>
      <Typography align='center' variant='h4'>
        {t('edit-org-step1-title')}
      </Typography>
      <TextField
        className={styles['edit-org-step1-org-name']}
        label={t('edit-org-step1-input-name')}
        variant='outlined'
        fullWidth
      />
      <MuiThemeProvider theme={defaultTheme}>
        <MUIRichTextEditor
          defaultValue={JSON.stringify(fakeData)}
          inlineToolbar={true}
          label={t('edit-org-step1-input-desc')}
          onSave={(...data) => console.log(JSON.stringify(data))}
        />
      </MuiThemeProvider>
    </div>
  );
};

Step1.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('edit-org')(Step1);
