import Link from 'next/link';
import PropTypes from 'prop-types';
import styles from './SidebarItem.module.scss';

const SidebarItem = ({ caption, url, active, handleClick }) => {
  if (active) {
    return (
      <Link href={url}>
        <li
          className={`${styles['sidebar-item']} ${styles['item-active']}`}
          onClick={event => handleClick(event, url)}>
          <a href={url}>{caption}</a>
        </li>
      </Link>
    );
  }
  return (
    <Link href={url}>
      <li className={styles['sidebar-item']} onClick={() => handleClick(url)}>
        <a href={url}>{caption}</a>
      </li>
    </Link>
  );
};

SidebarItem.propTypes = {
  active: PropTypes.bool,
  caption: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired
};

export default SidebarItem;
