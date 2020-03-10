import Link from 'next/link';
import PropTypes from 'prop-types';

const NavItem = ({ active = '', description = '', click, link, name }) => (
  <Link href={link}>
    <li
      className={`nav-item ${active}`}
      data-toggle='tooltip'
      data-placement='bottom'
      title={description}>
      {click ? (
        <a
          className='nav-link'
          href={link}
          key={name}
          target='_blank'
          onClick={click}
          rel='noopener noreferrer'>
          {name}
          {active === 'active' && <span className='sr-only'>(current)</span>}
        </a>
      ) : (
        <a
          className='nav-link'
          href={link}
          key={name}
          target='_blank'
          rel='noopener noreferrer'>
          {name}
          {active === 'active' && <span className='sr-only'>(current)</span>}
        </a>
      )}
    </li>
  </Link>
);

NavItem.propTypes = {
  active: PropTypes.string,
  click: PropTypes.func,
  description: PropTypes.string,
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default NavItem;
