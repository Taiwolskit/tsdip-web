import Link from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

const NavItem = ({ active, description, link, handleClick, name }) => {
  const router = useRouter();
  const checkUrl = [active, router.pathname].includes(link);
  let className = 'nav-item';
  if (checkUrl) className += ' active';

  return (
    <Link href={link}>
      <li
        className={className}
        data-placement='bottom'
        data-toggle='tooltip'
        onClick={() => handleClick(link)}
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
};

NavItem.defaultProps = {
  active: '',
};

NavItem.propTypes = {
  active: PropTypes.string,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default NavItem;
