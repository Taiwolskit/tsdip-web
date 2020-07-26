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
          <meta name='revisit-after' content='7 days' />
          <meta name='author' content='Taiwolskit' />
          <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1, user-scalable=no, shrink-to-fit=no'
          />
          <link
            rel='stylesheet'
            href='https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css'
            integrity='sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk'
            crossOrigin='anonymous'></link>
          <script
            src='https://code.jquery.com/jquery-3.5.1.slim.min.js'
            integrity='sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj'
            crossOrigin='anonymous'></script>
          <script
            src='https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js'
            integrity='sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo'
            crossOrigin='anonymous'></script>
          <script
            src='https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js'
            integrity='sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI'
            crossOrigin='anonymous'></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              $(function () {
                $('[data-toggle="tooltip"]').tooltip()
              })
            `,
            }}
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
