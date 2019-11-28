import Link from 'next/link';
import PropTypes from 'prop-types';

const NavItem = ({ active, link, name }) => (
  <Link href={link}>
    <li className={`nav-item ${active}`}>
      <a
        className='nav-link'
        href={link}
        key={name}
        target='_blank'
        rel='noopener noreferrer'>
        {name}
        {active === 'active' && <span className='sr-only'>(current)</span>}
      </a>
    </li>
  </Link>
);

NavItem.propTypes = {
  active: PropTypes.string,
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default NavItem;
