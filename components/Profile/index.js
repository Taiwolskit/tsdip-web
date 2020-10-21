import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';

import { ContextStore } from '../../ctx';
import { withTranslation } from '../../i18n';
import axios from '../../lib/axios';
import styles from './Profile.module.scss';

const Profile = ({ t }) => {
  const { accessToken, dispatch, user } = useContext(ContextStore);
  const [inputStatus, setInputStatus] = useState(false);
  const [stateEmail, setEmail] = useState(user.email);
  const [statePhone, setPhone] = useState(user.telephone);
  const [stateUsername, setUsername] = useState(user.username);

  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };

  useEffect(() => {
    const getProfile = async () => {
      try {
        const {
          data: {
            data: { username = '', telephone = '', email = '' },
          },
        } = await axios.get('/users/profile', { headers });
        setEmail(email);
        setPhone(telephone);
        setUsername(username);
      } catch (error) {
        console.error(`_get_profile_fail_ ${JSON.stringify(error)}`);

        if (
          error?.message === 'Network Error' ||
          error.response?.data?.msg === 'Token has expired'
        ) {
          dispatch({ type: 'LOGOUT' });
          return;
        }
        setInputStatus(true);
      }
    };

    getProfile();
  }, []);

  const handleChange = (type, value) => {
    switch (type) {
      case 'username':
        setUsername(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      case 'email':
        setEmail(value);
        break;
    }
  };

  const saveProfile = async (event) => {
    event.preventDefault();
    try {
      await axios.put(
        '/users/profile',
        {
          username:
            typeof stateUsername === 'string'
              ? stateUsername.toLowerCase()
              : null,
          telephone:
            typeof statePhone === 'string' ? statePhone.toLowerCase() : null,
          email:
            typeof stateEmail === 'string' ? stateEmail.toLowerCase() : null,
        },
        { headers }
      );
    } catch (error) {
      console.error(`_save_profile_fail_ ${JSON.stringify(error)}`);
    }
  };

  return (
    <form noValidate onSubmit={saveProfile}>
      <FormGroup>
        <Grid
          alignItems='center'
          className={styles['profile-form']}
          container
          spacing={1}
        >
          <Grid item>
            <AccountCircleIcon />
          </Grid>

          <Grid item className={styles['profile-form-item']}>
            <FormControl className={styles['profile-form-control']}>
              <InputLabel htmlFor='profile-username'>
                {t('profile:form-username-placeholder')}
              </InputLabel>
              <Input
                aria-describedby='profile-username-helper'
                disabled={inputStatus}
                id='profile-username'
                name='username'
                onChange={(event) =>
                  handleChange('username', event.target.value)
                }
                value={stateUsername}
              />
              <FormHelperText id='profile-username-helper'>
                {t('profile:form-username-helper')}
              </FormHelperText>
            </FormControl>
          </Grid>
        </Grid>

        <Grid
          alignItems='center'
          className={styles['profile-form']}
          container
          spacing={1}
        >
          <Grid item>
            <PhoneIphoneIcon />
          </Grid>
          <Grid item className={styles['profile-form-item']}>
            <FormControl className={styles['profile-form-control']}>
              <InputLabel htmlFor='profile-phone'>
                {t('profile:form-phone-placeholder')}
              </InputLabel>
              <Input
                aria-describedby='profile-phone-helper'
                disabled={inputStatus}
                id='profile-phone'
                name='phone'
                onChange={(event) => handleChange('phone', event.target.value)}
                value={statePhone}
              />
              <FormHelperText id='profile-phone-helper'>
                {t('profile:form-phone-helper')}
              </FormHelperText>
            </FormControl>
          </Grid>
        </Grid>

        <Grid
          alignItems='center'
          className={styles['profile-form']}
          container
          spacing={1}
        >
          <Grid item>
            <EmailIcon />
          </Grid>
          <Grid item className={styles['profile-form-item']}>
            <FormControl className={styles['profile-form-control']}>
              <InputLabel htmlFor='profile-email'>
                {t('profile:form-email-placeholder')}
              </InputLabel>
              <Input
                aria-describedby='profile-email-helper'
                disabled={inputStatus}
                id='profile-email'
                name='email'
                onChange={(event) => handleChange('email', event.target.value)}
                value={stateEmail}
              />
              <FormHelperText id='profile-email-helper'>
                {t('profile:form-email-helper')}
              </FormHelperText>
            </FormControl>
          </Grid>
        </Grid>

        <Button
          className={styles['profile-save-btn']}
          color='primary'
          type='submit'
          variant='contained'
        >
          {t('profile:form-save-btn')}
        </Button>
      </FormGroup>
    </form>
  );
};

Profile.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation(['common', 'profile'])(Profile);
