import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { wrapper } from '../store';
import '../public/styles.scss';

const App = ({ Component, pageProps }) => {

    useEffect(() => {
        const cookie = Cookies.get('token');
        // setCount(cookie);
        console.log('token------', cookie);
    });
    return (<Component {...pageProps} />);
};

export default wrapper.withRedux(App);
