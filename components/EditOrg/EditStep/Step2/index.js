import React from 'react';
import PropTypes from 'prop-types';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import { withTranslation } from '../../../../i18n';

const Step2 = ({ t }) => (
  <form noValidate autoComplete='off'>
    <Typography align='center' variant='h4'>
      {t('edit-org-step2-title')}
    </Typography>
    <TextField
      label={t('edit-org-step2-input-address-label')}
      id='social-address'
      margin='normal'
      fullWidth
    />
    <TextField
      label={t('edit-org-step2-input-email-label')}
      type='email'
      id='social-email'
      margin='normal'
      fullWidth
    />
    <TextField
      label={t('edit-org-step2-input-fan-page-label')}
      type='url'
      id='social-fan-page'
      margin='normal'
      fullWidth
    />
    <TextField
      label={t('edit-org-step2-input-instagram-label')}
      id='social-instagram'
      margin='normal'
      helperText={t('edit-org-step2-input-instagram-helper')}
      fullWidth
      InputProps={{
        startAdornment: <InputAdornment position='start'>@</InputAdornment>,
      }}
    />
    <TextField
      label={t('edit-org-step2-input-line-label')}
      id='social-line'
      margin='normal'
      fullWidth
    />
    <TextField
      label={t('edit-org-step2-input-telephone-label')}
      type='tel'
      id='social-telephone'
      margin='normal'
      fullWidth
    />
    <TextField
      label={t('edit-org-step2-input-website-label')}
      type='url'
      id='social-website'
      margin='normal'
      fullWidth
    />
    <TextField
      label={t('edit-org-step2-input-youtube-label')}
      type='url'
      id='social-youtube'
      margin='normal'
      fullWidth
    />
  </form>
);

Step2.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('edit-org')(Step2);
