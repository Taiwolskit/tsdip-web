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
      fullWidth
      id='social-address'
      label={t('edit-org-step2-input-address-label')}
      margin='normal'
    />
    <TextField
      fullWidth
      id='social-email'
      label={t('edit-org-step2-input-email-label')}
      margin='normal'
      type='email'
    />
    <TextField
      fullWidth
      id='social-fan-page'
      label={t('edit-org-step2-input-fan-page-label')}
      margin='normal'
      type='url'
    />
    <TextField
      fullWidth
      helperText={t('edit-org-step2-input-instagram-helper')}
      id='social-instagram'
      InputProps={{
        startAdornment: <InputAdornment position='start'>@</InputAdornment>,
      }}
      label={t('edit-org-step2-input-instagram-label')}
      margin='normal'
    />
    <TextField
      fullWidth
      id='social-line'
      label={t('edit-org-step2-input-line-label')}
      margin='normal'
    />
    <TextField
      fullWidth
      id='social-telephone'
      label={t('edit-org-step2-input-telephone-label')}
      margin='normal'
      type='tel'
    />
    <TextField
      fullWidth
      id='social-website'
      label={t('edit-org-step2-input-website-label')}
      margin='normal'
      type='url'
    />
    <TextField
      fullWidth
      id='social-youtube'
      label={t('edit-org-step2-input-youtube-label')}
      margin='normal'
      type='url'
    />
  </form>
);

Step2.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('edit-org')(Step2);
