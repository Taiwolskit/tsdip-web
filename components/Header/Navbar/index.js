import Link from 'next/link';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { DispatchContext } from '../../../context';
import NavItem from './NavItem';
import './styles.scss';

const linkList = [
  {
    link: '/studios',
    description: '我想知道去哪裡學舞',
    name: '街舞工作室介紹'
  },
  {
    link: '/events',
    description: '哪裡可以參加活動',
    name: '活動介紹'
  },
  {
    link: '/groups',
    description: '台灣有哪些舞團呢？',
    name: '舞團介紹'
  },
  {
    link: '/dancers',
    description: '老師好帥，我想認識他',
    name: '舞者介紹'
  },
  {
    link: '/areas',
    description: '可以去哪裡練舞',
    name: '我想練舞'
  }
];

const loginLink = [
  {
    link: '/profile',
    name: '個人檔案'
  },
  {
    link: '/logout',
    name: '登出'
  }
];

const Navbar = ({ isLoggedIn = false }) => {
  const dispatch = useContext(DispatchContext);

  const toggleLogin = () =>
    dispatch({
      type: 'GOOGLE_LOGIN',
      isLoggedIn
    });

  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <a className='navbar-brand mb-0 h1' href='/'>
        Taiwan Street Dance
      </a>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarToggler'
        aria-controls='navbarToggler'
        aria-expanded='false'
        aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon'></span>
      </button>

      <div className='collapse navbar-collapse' id='navbarToggler'>
        <ul className='navbar-nav ml-auto mt-2 mt-lg-0'>
          {linkList.map(({ active, description, link, name }) => (
            <NavItem
              active={active}
              description={description}
              key={name}
              link={link}
              name={name}
            />
          ))}
          {isLoggedIn ? (
            <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle'
                href='#'
                id='navbarDropdownMenuLink'
                role='button'
                data-toggle='dropdown'
                aria-haspopup='true'
                onClick={toggleLogin}
                aria-expanded='false'>
                使用者
              </a>
              <div
                className='dropdown-menu'
                aria-labelledby='navbarDropdownMenuLink'>
                {loginLink.map(({ name, link }) => (
                  <Link key={name} href={link}>
                    <a className='dropdown-item' href={link}>
                      {name}
                    </a>
                  </Link>
                ))}
              </div>
            </li>
          ) : (
            <NavItem key='登入' click={toggleLogin} name='登入' link='#' />
          )}
        </ul>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

export default Navbar;
