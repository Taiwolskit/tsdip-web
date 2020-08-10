import React from 'react';

const Custom404 = () => <h1>404 - Page Not Found</h1>;

Custom404.getInitialProps = () => ({
  namespacesRequired: ['common'],
});

export default Custom404;