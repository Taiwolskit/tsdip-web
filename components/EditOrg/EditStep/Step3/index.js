import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Email from '@material-ui/icons/Email';
import Facebook from '@material-ui/icons/Facebook';
import Instagram from '@material-ui/icons/Instagram';
import LocationOn from '@material-ui/icons/LocationOn';
import Phone from '@material-ui/icons/Phone';
import Web from '@material-ui/icons/Web';
import YouTube from '@material-ui/icons/YouTube';

import styles from './Step3.module.scss';

const SocialItem = (type, value) => {
  let icon = undefined;
  switch (type) {
    case 'address':
      icon = <LocationOn />;
      break;
    case 'email':
      icon = <Email />;
      break;
    case 'fanPage':
      icon = <Facebook />;
      break;
    case 'instagram':
      icon = <Instagram />;
      break;
    // case 'line':
    //   icon = <LocationOn />;
    //   break;
    case 'telephone':
      icon = <Phone />;
      break;
    case 'website':
      icon = <Web />;
      break;
    case 'youtube':
      icon = <YouTube />;
      break;
  }

  return (
    <Grid item xs={3} key={type} alt={type}>
      <Paper className={styles['edit-org-step3-item']}>
        {icon}
        <p className={styles['edit-org-step3-item-text']}>{value}</p>
      </Paper>
    </Grid>
  );
};

const genSocialItem = (social) => {
  const result = [];
  for (const key in social) {
    result.push(SocialItem(key, social[key]));
  }
  return result;
};


const Step3 = ({ stepData }) => {
  const { orgName, orgDescription, social } = stepData;

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper className={styles['edit-org-step3-item']}>{orgName}</Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper className={styles['edit-org-step3-item']}>{JSON.stringify(orgDescription)}</Paper>
      </Grid>
      {genSocialItem(social)}
    </Grid>
  );
};

export default Step3;
