import { useEffect } from 'react';
import './styles.scss';

const fbFields =
  'birthday,email,first_name,gender,location,middle_name,name,name_format,short_name,work,picture{url,height,is_silhouette,width,cache_key},hometown,languages,last_name,education';

const fbScope =
  'email,public_profile,user_gender,user_likes,user_location,user_photos';

const LoginPage = () => {
  const checkLoginState = () => {
    FB.login(
      res => {
        console.log('Successful login : ', JSON.stringify(res));
        FB.api(
          '/me',
          'GET',
          {
            fields: fbFields
          },
          fbProfile => {
            console.log(
              'Successful fbresponse for: ' + JSON.stringify(fbProfile)
            );
          }
        );
      },
      {
        scope: fbScope
      }
    );
  };

  useEffect(() => {
    if (window) {
      window.checkLoginState = checkLoginState;
    }
  });

  return (
    <main id='login-page' className='row'>
      <h1 id='login-page-title' className='col-sm-12'>
        登入 / 註冊使用 TSDIP
      </h1>
      <div
        className='fb-login-button col-sm-12'
        data-auto-logout-link='false'
        data-button-type='login_with'
        data-onlogin='checkLoginState'
        data-scope='public_profile,user_location,user_likes,user_photos,user_gender,email'
        data-size='large'
        data-use-continue-as='true'
        data-width='700'></div>
      <div
        className='g-signin2 col-sm-12'
        data-height='50'
        data-longtitle='true'
        data-onsuccess='onSignIn'
        data-scope='profile email'
        data-theme='dark'
        data-width='400'></div>
    </main>
  );
};

export default LoginPage;
