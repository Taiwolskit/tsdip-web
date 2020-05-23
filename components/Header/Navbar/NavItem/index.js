import Link from 'next/link';
import PropTypes from 'prop-types';

const NavItem = ({ active, description, link, name }) => (
  <Link href={link}>
    <li
      className={`nav-item ${active}`}
      data-toggle='tooltip'
      data-placement='bottom'
      title={description}>
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

NavItem.defaultProps = {
  active: '',
};

NavItem.propTypes = {
  active: PropTypes.string,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default NavItem;
