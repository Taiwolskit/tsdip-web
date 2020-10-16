import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import { withTranslation } from '../../i18n';

import EditStep from './EditStep';

const EditOrg = ({ t }) => (
  <Container maxWidth='md'>
    <Typography variant='h3' gutterBottom align='center'>
      {t('edit-org-title')}
    </Typography>
    <EditStep />
  </Container>
);

EditOrg.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('edit-org')(EditOrg);
