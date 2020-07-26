import { useContext } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import Cookies from 'js-cookie';
import ContextStore from '../../../ctx';

const LoginForm = () => {
  const { authDispatch } = useContext(ContextStore);

  const handleClick = () => {
    Cookies.set('token', 'isLogin', {
      // secure: true,
      expires: 7,
    });
    authDispatch({ type: 'LOGIN', token: 'isLogin' });
    Router.push('/dashboard');
  };

  return (
    <form id='login-form'>
      <div className='form-group'>
        <label htmlFor='login-email'>Email</label>
        <input
          type='email'
          className='form-control'
          id='login-email'
          aria-describedby='emailHelp'
          placeholder='hiphop@example.com'
        />
        <small id='emailHelp' className='form-text text-muted'>
          We'll never share your email with anyone else.
        </small>
      </div>
      <div className='form-group'>
        <label htmlFor='login-password'>Password</label>
        <input
          type='password'
          className='form-control'
          id='login-password'
          aria-describedby='pwdHelp'
          placeholder='Typing your password'
        />
        <small id='pwdHelp' className='form-text text-muted'>
          At least 8 words and keep in secure.
        </small>
      </div>
      <div className='form-group'>
        <button
          type='submit'
          className='btn btn-primary'
          onClick={() => handleClick()}>
          Log In
        </button>
        <Link href='/forget-password'>
          <a className='form-text text-muted'>Forget your password ?</a>
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
