import Link from 'next/link';
import PropTypes from 'prop-types';
import NavItem from './NavItem';

const linkList = [
  {
    link: '/studios',
    name: '街舞工作室介紹'
  },
  {
    active: 'active',
    link: '/events',
    name: '活動介紹'
  },
  {
    link: '/groups',
    name: '舞團介紹'
  },
  {
    link: '/dancers',
    name: '舞者介紹'
  },
  {
    link: '/dancers',
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

const Navbar = ({ isLoggedIn = true }) => (
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
        {linkList.map(({ active, link, name }) => (
          <NavItem active={active} link={link} name={name} key={name} />
        ))}
        {isLoggedIn ? (
          <li className='nav-item dropdown'>
            <a
              className='nav-link dropdown-toggle'
              href='/profile'
              id='navbarDropdownMenuLink'
              role='button'
              data-toggle='dropdown'
              aria-haspopup='true'
              aria-expanded='false'>
              使用者
            </a>
            <div
              className='dropdown-menu'
              aria-labelledby='navbarDropdownMenuLink'>
              {loginLink.map(({ link, name }) => (
                <Link href={link} key={name}>
                  <a className='dropdown-item' href={link}>
                    {name}
                  </a>
                </Link>
              ))}
            </div>
          </li>
        ) : (
          <NavItem link='/login' name='登入' key='登入' />
        )}
      </ul>
    </div>
  </nav>
);

Navbar.propTypes = {
  isLoggedIn: PropTypes.bool
};

export default Navbar;
