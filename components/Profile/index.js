import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

import AccountCircle from '@material-ui/icons/AccountCircle';
import Email from '@material-ui/icons/Email';
import PhoneIphone from '@material-ui/icons/PhoneIphone';

import { withTranslation } from '../../i18n';
import styles from './Profile.module.scss';

const Profile = ({ t }) => (
  <form noValidate autoComplete='on' action='/login' method='post'>
    <FormGroup>
      <Grid container spacing={1} alignItems='center'>
        <Grid item>
          <AccountCircle />
        </Grid>
        <Grid item className={styles['profile-form']}>
          <FormControl className={styles['profile-form-control']}>
            <InputLabel htmlFor='profile-username'>
              {t('profile:form-username-placeholder')}
            </InputLabel>
            <Input
              id='profile-username'
              aria-describedby='profile-username-helper'
              name='username'
              value='test'
            />
            <FormHelperText id='profile-username-helper'>
              {t('profile:form-username-helper')}
            </FormHelperText>
          </FormControl>
        </Grid>
      </Grid>

      <Grid container spacing={1} alignItems='center'>
        <Grid item>
          <PhoneIphone />
        </Grid>
        <Grid item className={styles['profile-form']}>
          <FormControl className={styles['profile-form-control']}>
            <InputLabel error htmlFor='profile-phone'>
              {t('profile:form-phone-placeholder')}
            </InputLabel>
            <Input
              error
              id='profile-phone'
              aria-describedby='profile-phone-helper'
              name='phone'
            />
            <FormHelperText error id='profile-phone-helper'>
              {t('profile:form-phone-helper')}
            </FormHelperText>
          </FormControl>
        </Grid>
      </Grid>

      <Grid container spacing={1} alignItems='center'>
        <Grid item>
          <Email />
        </Grid>
        <Grid item className={styles['profile-form']}>
          <FormControl className={styles['profile-form-control']}>
            <InputLabel htmlFor='profile-email'>
              {t('profile:form-email-placeholder')}
            </InputLabel>
            <Input
              id='profile-email'
              aria-describedby='profile-email-helper'
              name='email'
            />
            <FormHelperText id='profile-email-helper'>
              {t('profile:form-email-helper')}
            </FormHelperText>
          </FormControl>
        </Grid>
      </Grid>

      <Button type='submit' color='primary' variant='contained'>
        Save
      </Button>
    </FormGroup>
  </form>
);

Profile.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation(['common', 'profile'])(Profile);
