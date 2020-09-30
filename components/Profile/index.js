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

import { withTranslation } from '../../i18n';
import styles from './Profile.module.scss';
import axios from '../../lib/axios';
import { ContextStore } from '../../ctx';

const Profile = ({ t }) => {
  const { accessToken, user } = useContext(ContextStore);
  const [inputStatus, setInputStatus] = useState(false);
  const [stateUsername, setUsername] = useState(user.username);
  const [stateEmail, setEmail] = useState(user.email);
  const [statePhone, setPhone] = useState(user.telephone);

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
        setUsername(username);
        setPhone(telephone);
        setEmail(email);
      } catch (error) {
        console.error(`Get user profile failed ${JSON.stringify(error)}`);
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
      default:
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
      console.error(`Save user profile failed ${JSON.stringify(error)}`);
    }
  };

  return (
    <form noValidate onSubmit={saveProfile}>
      <FormGroup>
        <Grid container spacing={1} alignItems='center' className={styles['profile-form']}>
          <Grid item>
            <AccountCircleIcon />
          </Grid>

          <Grid item className={styles['profile-form-item']}>
            <FormControl className={styles['profile-form-control']}>
              <InputLabel htmlFor='profile-username'>
                {t('profile:form-username-placeholder')}
              </InputLabel>
              <Input
                id='profile-username'
                aria-describedby='profile-username-helper'
                name='username'
                disabled={inputStatus}
                value={stateUsername}
                onChange={(event) =>
                  handleChange('username', event.target.value)
                }
              />
              <FormHelperText id='profile-username-helper'>
                {t('profile:form-username-helper')}
              </FormHelperText>
            </FormControl>
          </Grid>
        </Grid>

        <Grid container spacing={1} alignItems='center' className={styles['profile-form']}>
          <Grid item>
            <PhoneIphoneIcon />
          </Grid>
          <Grid item className={styles['profile-form-item']}>
            <FormControl className={styles['profile-form-control']}>
              <InputLabel htmlFor='profile-phone'>
                {t('profile:form-phone-placeholder')}
              </InputLabel>
              <Input
                id='profile-phone'
                aria-describedby='profile-phone-helper'
                name='phone'
                disabled={inputStatus}
                value={statePhone}
                onChange={(event) => handleChange('phone', event.target.value)}
              />
              <FormHelperText id='profile-phone-helper'>
                {t('profile:form-phone-helper')}
              </FormHelperText>
            </FormControl>
          </Grid>
        </Grid>

        <Grid container spacing={1} alignItems='center' className={styles['profile-form']}>
          <Grid item>
            <EmailIcon />
          </Grid>
          <Grid item className={styles['profile-form-item']}>
            <FormControl className={styles['profile-form-control']}>
              <InputLabel htmlFor='profile-email'>
                {t('profile:form-email-placeholder')}
              </InputLabel>
              <Input
                id='profile-email'
                aria-describedby='profile-email-helper'
                name='email'
                disabled={inputStatus}
                value={stateEmail}
                onChange={(event) => handleChange('email', event.target.value)}
              />
              <FormHelperText id='profile-email-helper'>
                {t('profile:form-email-helper')}
              </FormHelperText>
            </FormControl>
          </Grid>
        </Grid>

        <Button type='submit' color='primary' variant='contained' className={styles['profile-save-btn']}>
          Save
        </Button>
      </FormGroup>
    </form>
  );
};

Profile.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation(['common', 'profile'])(Profile);
