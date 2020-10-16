import React, { useState } from 'react';
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

const Step2 = ({ setStepData, stepData, t, setActiveStep }) => {
  const submit = (event) => {
    event.preventDefault();
    const { id, value } = event.target;

    switch (id) {
      case 'social-address':
        stepData.social.address = value;
        setAddress(value);
        break;
      case 'social-email':
        stepData.social.email = value;
        setEmail(value);
        break;
      case 'social-fan-page':
        stepData.social.fanPage = value;
        setFanPage(value);
        break;
      case 'social-instagram':
        stepData.social.instagram = value;
        setInstagram(value);
        break;
      case 'social-line':
        stepData.social.line = value;
        setLine(value);
        break;
      case 'social-telephone':
        stepData.social.telephone = value;
        setTelephone(value);
        break;
      case 'social-website':
        stepData.social.website = value;
        setWebsite(value);
        break;
      case 'social-youtube':
        stepData.social.youtube = value;
        setYoutube(value);
        break;
    }

    setStepData(stepData);
  };

  if (!stepData.name || !stepData.description) {
    setActiveStep(0);
    return null;
  }

  const [address, setAddress] = useState(stepData.social.address);
  const [email, setEmail] = useState(stepData.social.email);
  const [fanPage, setFanPage] = useState(stepData.social.fanPage);
  const [instagram, setInstagram] = useState(stepData.social.instagram);
  const [line, setLine] = useState(stepData.social.line);
  const [telephone, setTelephone] = useState(stepData.social.telephone);
  const [website, setWebsite] = useState(stepData.social.website);
  const [youtube, setYoutube] = useState(stepData.social.youtube);

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
        value={address}
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
        value={email}
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
        value={fanPage}
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
        value={instagram}
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
        value={line}
      />
      <TextField
        fullWidth
        id='social-telephone'
        label={t('edit-org-step2-input-telephone-label')}
        margin='normal'
        onChange={submit}
        type='tel'
        value={telephone}
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
        value={website}
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
        value={youtube}
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
