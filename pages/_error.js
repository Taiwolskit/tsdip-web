import React from 'react';
import PropTypes from 'prop-types';

const Error = ({ statusCode }) => (
  <p>
    {statusCode
      ? `An error ${statusCode} occurred on server`
      : 'An error occurred on client'}
  </p>
);

Error.getInitialProps = ({ res, err }) => {
  let statusCode = 404;
  if (res) {
    statusCode = res.statusCode;
  } else if (err) {
    statusCode = err.statusCode;
  }
  return { statusCode, namespacesRequired: ['common'] };
};

Error.propTypes = {
  statusCode: PropTypes.number.isRequired,
};

export default Error;
