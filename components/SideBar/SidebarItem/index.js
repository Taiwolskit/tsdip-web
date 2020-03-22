import Link from 'next/link';
import PropTypes from 'prop-types';
import styles from './SidebarItem.module.scss';

const SidebarItem = ({ caption, url }) => (
  <Link href={url}>
    <li className={styles['sidebar-item']}>
      <a href={url}>{caption}</a>
    </li>
  </Link>
);

SidebarItem.propTypes = {
  caption: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default SidebarItem;
