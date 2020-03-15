import styles from './LoginPage.module.scss';

const LoginPage = () => {
  return (
    <main id='login-page' className={`row ${styles['login-page']}`}>
      <h1 className={`col-sm-12 ${styles['login-page-title']}`}>
        登入 / 註冊使用 TSDIP
      </h1>
    </main>
  );
};

export default LoginPage;
