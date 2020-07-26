import PropTypes from 'prop-types';
import NavItem from './NavItem';

const Navbar = ({ items, navbarActive, navbarClick }) => (
  <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
    <a className='navbar-brand' href='/'>
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
    <div id='navbarToggler' className='collapse navbar-collapse'>
      <ul className='navbar-nav ml-auto'>
        {items.map(({ description, link, name }) => (
          <NavItem
            active={navbarActive}
            description={description}
            handleClick={navbarClick}
            key={name}
            link={link}
            name={name}
          />
        ))}
      </ul>
    </div>
  </nav>
);

Navbar.defaultProps = {
  items: [
    {
      description: '有哪些街舞活動可以參加呢?',
      link: '/events',
      name: '活動介紹',
    },
    {
      description: '會員登入',
      link: '/login',
      name: '登入',
    },
  ],
};

Navbar.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  navbarActive: PropTypes.string,
  navbarClick: PropTypes.func.isRequired,
};

export default Navbar;
