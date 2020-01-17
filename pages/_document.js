import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import 'normalize.css';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='zh-Hant-TW'>
        <Head>
          <meta charSet='utf-8' />
          <meta
            name='title'
            content='Taiwan Street Dance Information Platform'
          />
          <meta
            name='description'
            content='Taiwan Street Dance Information Platform'
          />
          <meta
            name='keywords'
            content='Street Dance,Dance,Hip Hop,Popping,Locking,Jazz,Dancehall,Krump'
          />
          <meta name='robots' content='index, follow' />
          <meta name='revisit-after' content='7 days' />
          <meta name='author' content='Taiwolskit' />
          <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1, user-scalable=no, shrink-to-fit=no'
          />
          <link
            rel='stylesheet'
            href='https://stackpath.bootstrapcdn.com/bootstrap/4.4.0/css/bootstrap.min.css'
            integrity='sha384-SI27wrMjH3ZZ89r4o+fGIJtnzkAnFs3E4qz9DIYioCQ5l9Rd/7UAa8DHcaL8jkWt'
            crossOrigin='anonymous'></link>
          <script
            src='https://code.jquery.com/jquery-3.4.1.slim.min.js'
            integrity='sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n'
            crossOrigin='anonymous'></script>
          <script
            src='https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js'
            integrity='sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo'
            crossOrigin='anonymous'></script>
          <script
            src='https://stackpath.bootstrapcdn.com/bootstrap/4.4.0/js/bootstrap.min.js'
            integrity='sha384-3qaqj0lc6sV/qpzrc1N5DC6i1VRn/HyX4qdPaiEFbn54VjQBEU341pvjz7Dv3n6P'
            crossOrigin='anonymous'></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
