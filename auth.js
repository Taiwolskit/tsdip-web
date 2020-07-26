import App from 'next/app';
// import React, { Component } from 'react';

const Auth = ({ children, checkAuth, isLogin }) => {
    console.log('-------');
    console.log(isLogin);
    return (
      <div>
        <p>{isLogin + 'ss'}</p>
        <button onClick={(event) => checkAuth(event, isLogin)}>Fuck</button>
        {children}
      </div>
    );
};

export default Auth;
