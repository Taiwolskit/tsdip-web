import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/core/styles';

export default class NextDocument extends Document {
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
          <meta name='revisit-after' content='7 days' />
          <meta name='author' content='Taiwolskit' />
          <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
          />
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/icon?family=Material+Icons'
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

NextDocument.getInitialProps = async (ctx) => {
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
    ],
  };
};
