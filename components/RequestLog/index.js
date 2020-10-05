import React from 'react';
import PropTypes from 'prop-types';

import { withTranslation } from '../../i18n';

const RequestLog = ({ t }) => {

  return (
    <p>No data</p>
  );
};

RequestLog.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('org')(RequestLog);
