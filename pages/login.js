import React, { Component } from 'react';
import Head from 'next/head';

export default class App extends Component {
  componentDidMount() {
    // window.fbAsyncInit = function() {
    //   window.FB.init({
    //     appId: '2352826731682105',
    //     cookie: true,
    //     xfbml: true,
    //     version: 'v5.0'
    //   });
    // };
    window.checkLoginState = this.checkLoginState;
  }

  checkLoginState() {
    // window.FB.getLoginStatus(function (response) {
    //   console.log('response ====>', response);
    //   console.log('Welcome!  Fetching your information.... ');
    //   window.FB.api('/me', function(fbresponse) {
    //     console.log('Successful login for: ' + fbresponse.name);
    //     console.log('Successful fbresponse for: ' + fbresponse);
    //   });
    // });
    FB.login(
      function(response) {
        console.log('response ====>', JSON.stringify(response));
        FB.api(
          '/me',
          'GET',
          {
            fields:
              'birthday,email,first_name,gender,location,middle_name,name,name_format,short_name,work,picture{url,height,is_silhouette,width,cache_key},hometown,languages,last_name,education'
          },
          function(fbresponse) {
            console.log('Successful login for: ' + fbresponse.name);
            console.log(
              'Successful fbresponse for: ' + JSON.stringify(fbresponse)
            );
          }
        );
      },
      {
        scope:
          'public_profile,user_location,user_likes,user_photos,user_gender,email'
      }
    );
  }

  render() {
    return (
      <div className='main'>
        <Head>
          <script
            async
            defer
            crossOrigin='anonymous'
            src='https://connect.facebook.net/zh_TW/sdk.js#xfbml=1&version=v5.0&appId=2352826731682105&autoLogAppEvents=1'></script>
        </Head>
        <div
          className='fb-login-button'
          data-width='500'
          data-size='large'
          data-button-type='login_with'
          data-auto-logout-link='false'
          data-onlogin='checkLoginState'
          data-scope='public_profile,user_location,user_likes,user_photos,user_gender,email'
          data-use-continue-as='true'></div>
        <button onClick={this.checkLoginState}>Check</button>
      </div>
    );
  }
}
