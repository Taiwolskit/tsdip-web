import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import styles from './LoginPage.module.scss';

const LoginPage = () => {
  return (
    <main id='login-page' className={`row ${styles['login-page']}`}>
      <h1 className={`col-sm-12 ${styles['login-page-title']}`}>
        登入 / 註冊使用 TSDIP
      </h1>

      <div className="container">
        <div className={`${styles['login-page-form']} row align-items-center justify-content-center`}>

          <ul className={`${styles['login-page-form-tab-header']} nav nav-pills nav-justified`} role="tablist">
            <li className="nav-item" role="presentation">
              <a className="nav-link active" id="login-page-form-login-tab" data-toggle="pill" href="#login-page-form-login" role="tab" aria-controls="login-page-form-login" aria-selected="true">Login</a>
            </li>
            <li className="nav-item" role="presentation">
              <a className="nav-link" id="login-page-form-signup-tab" data-toggle="pill" href="#login-page-form-signup" role="tab" aria-controls="login-page-form-signup" aria-selected="false">Sign Up</a>
            </li>
          </ul>

          <div className={`${styles['login-page-form-tab-content']}`}>
            <div className="tab-pane fade show active" id="login-page-form-login" role="tabpanel" aria-labelledby="login-page-form-login-tab">
              <LoginForm />
            </div>

            <div className="tab-pane fade" id="login-page-form-signup" role="tabpanel" aria-labelledby="login-page-form-signup-tab">
              <SignupForm />
            </div>
            <div className={`${styles['separator']}`}>Log In / Sign Up with social media account</div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
