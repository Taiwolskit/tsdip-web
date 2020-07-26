import Router from 'next/router';
import Cookies from 'js-cookie';
export const CHECK_AUTH = 'CHECK_AUTH';

export const checkAuth = (event, isLogin) => {
  event.preventDefault();
  console.log('action-------', isLogin);

  return async (dispatch) => {
    localStorage.setItem('blog-admin-token', isLogin);
    Cookies.set('token', String('isLogin'), {
      // secure: true,
      expires: 7
    });

    dispatch({
      type: CHECK_AUTH,
      isLogin,
    });
    Router.push('/dashboard');
  };
};
