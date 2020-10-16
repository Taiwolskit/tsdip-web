import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class NextDocument extends Document {
  render() {
    return (
      <Html lang='zh-Hant-TW'>
        <Head>
          <meta charSet='utf-8' />
          <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
          <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
          <meta name='author' content='Taiwolskit' />
          <meta
            name='title'
            content='TSDIP — Taiwan Street Dance Information Platform'
          />
          <meta
            name='description'
            content='A platform that collects every information about Street dance studios, activities, and classes in Taiwan.'
          />
          <meta
            name='keywords'
            content='街舞,台灣街舞,Street Dance,Dance,Hip Hop,Popping,Locking,Jazz,Dancehall,Krump'
          />
          <meta name='revisit-after' content='7 days' />
          <meta name='robots' content='index, follow' />

          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
          />
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/icon?family=Material+Icons'
          />

          {/* <!-- Google Tag Manager --> */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');
              `,
            }}
          ></script>
          {/* <!-- End Google Tag Manager --> */}
          {/* <!-- Facebook Pixel Code --> */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '${process.env.NEXT_PUBLIC_FB_ID}');
                fbq('track', 'PageView');
              `,
            }}
          ></script>
          {/* <!-- End Facebook Pixel Code --> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
            height='0'
            width='0'
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}
        {/* <!-- Facebook Pixel Code --> */}
        <noscript>
          <img
            height='1'
            width='1'
            style={{ display: 'none' }}
            src={`https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_FB_ID}&ev=PageView&noscript=1`}
          />
        </noscript>
        {/* <!-- End Facebook Pixel Code --> */}
      </Html>
    );
  }
}
