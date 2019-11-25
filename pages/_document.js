import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

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
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
