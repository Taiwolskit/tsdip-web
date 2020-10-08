import React from 'react';
import PropTypes from 'prop-types';
import MUIRichTextEditor from 'mui-rte';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import {
  Editor,
  EditorState,
  RawDraftContentState,
  convertFromRaw,
  convertToRaw
} from 'draft-js';
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
        height: '-webkit-fill-available',
        padding: '5px',
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
      data: {},
      depth: 0,
      entityRanges: [],
      inlineStyleRanges: [],
      key: '3fbbl',
      text: '測試測試',
      type: 'unstyled',
    },
    {
      data: {},
      depth: 0,
      entityRanges: [],
      inlineStyleRanges: [],
      key: '31bq5',
      text: '哈囉哈囉',
      type: 'unstyled',
    },
  ],
  entityMap: {},
};

const Step1 = ({ setStepData, stepData, t }) => {
  console.log('step1------', stepData.article);

  return (
    <div>
      <Typography align='center' variant='h4'>
        {t('edit-org-step1-title')}
      </Typography>
      <TextField
        className={styles['edit-org-step1-org-name']}
        fullWidth
        label={t('edit-org-step1-input-name')}
        variant='outlined'
      />
      <MuiThemeProvider theme={defaultTheme}>
        <MUIRichTextEditor
          inlineToolbar={true}
          label={t('edit-org-step1-input-desc')}
          onSave={(...data) => console.log(JSON.stringify(data))}
          onChange={(editorState) => {
            stepData.article = editorState.getCurrentContent();
            console.info('dataxxxxxx', stepData);
            console.info('dataxxxxxx', convertToRaw(stepData.article));
            setStepData(stepData);
          }}
        />
      </MuiThemeProvider>
    </div>
  );
};

Step1.propTypes = {
  setStepData: PropTypes.func.isRequired,
  stepData: PropTypes.object.isRequired,
  t: PropTypes.func.isRequired,
};

export default withTranslation('edit-org')(Step1);
