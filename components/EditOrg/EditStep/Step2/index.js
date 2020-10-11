import React from 'react';
import PropTypes from 'prop-types';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Email from '@material-ui/icons/Email';
import Facebook from '@material-ui/icons/Facebook';
import Instagram from '@material-ui/icons/Instagram';
import LocationOn from '@material-ui/icons/LocationOn';
import Phone from '@material-ui/icons/Phone';
import Web from '@material-ui/icons/Web';
import YouTube from '@material-ui/icons/YouTube';

import { withTranslation } from '../../../../i18n';

const Step2 = ({ setStepData, stepData, t, social, setSocial }) => {
  const submit = (event) => {
    event.preventDefault();
    const { id, value } = event.target;

    switch (id) {
      case 'social-address':
        social.address = value;
        break;
      case 'social-email':
        social.email = value;
        break;
      case 'social-fan-page':
        social.fanPage = value;
        break;
      case 'social-instagram':
        social.instagram = value;
        break;
      case 'social-line':
        social.line = value;
        break;
      case 'social-telephone':
        social.telephone = value;
        break;
      case 'social-website':
        social.website = value;
        break;
      case 'social-youtube':
        social.youtube = value;
        break;
    }

    console.log('after ------', social);
    setSocial(social);
  };

  console.log('render---', stepData);

  return (
    <form noValidate autoComplete='off'>
      <Typography align='center' variant='h4'>
        {t('edit-org-step2-title')}
      </Typography>

      <TextField
        fullWidth
        id='social-address'
        label={t('edit-org-step2-input-address-label')}
        margin='normal'
        onChange={submit}
        value={social?.address}
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <LocationOn />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        fullWidth
        id='social-email'
        label={t('edit-org-step2-input-email-label')}
        margin='normal'
        onChange={submit}
        type='email'
        value={social?.email}
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <Email />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        fullWidth
        id='social-fan-page'
        label={t('edit-org-step2-input-fan-page-label')}
        margin='normal'
        onChange={submit}
        type='url'
        value={social?.fanPage}
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <Facebook />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        fullWidth
        helperText={t('edit-org-step2-input-instagram-helper')}
        id='social-instagram'
        label={t('edit-org-step2-input-instagram-label')}
        margin='normal'
        onChange={submit}
        value={social?.instagram}
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <Instagram />@
            </InputAdornment>
          ),
        }}
      />
      <TextField
        fullWidth
        id='social-line'
        label={t('edit-org-step2-input-line-label')}
        margin='normal'
        onChange={submit}
        value={social?.line}
      />
      <TextField
        fullWidth
        id='social-telephone'
        label={t('edit-org-step2-input-telephone-label')}
        margin='normal'
        onChange={submit}
        type='tel'
        value={social?.telephone}
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <Phone />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        fullWidth
        id='social-website'
        label={t('edit-org-step2-input-website-label')}
        margin='normal'
        onChange={submit}
        type='url'
        value={social?.website}
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <Web />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        fullWidth
        id='social-youtube'
        label={t('edit-org-step2-input-youtube-label')}
        margin='normal'
        onChange={submit}
        type='url'
        value={social?.youtube}
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <YouTube />
            </InputAdornment>
          ),
        }}
      />
    </form>
  );
};

Step2.propTypes = {
  setStepData: PropTypes.func.isRequired,
  stepData: PropTypes.object.isRequired,
  t: PropTypes.func.isRequired,
};

export default withTranslation('edit-org')(Step2);
