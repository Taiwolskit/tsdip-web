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

const Step1 = ({
  setStepData,
  stepData,
  t,
  orgName,
  setOrgName,
  orgDescription,
  setOrgDescription,
}) => {
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
        value={orgName}
        onChange={(event) => {
          event.preventDefault();
          // stepData.orgName = event.target.value;
          console.log(event.target.value);
          setOrgName(event.target.value);
        }}
      />
      <MuiThemeProvider theme={defaultTheme}>
        <MUIRichTextEditor
          defaultValue={orgDescription}
          inlineToolbar={true}
          label={t('edit-org-step1-input-desc')}
          onChange={(editorState) => {
            orgDescription = editorState.getCurrentContent();
            setOrgDescription(orgDescription);
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
