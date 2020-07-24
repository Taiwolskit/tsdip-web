import Link from 'next/link';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import styles from './SidebarItem.module.scss';

const SidebarItem = ({ active, caption, handleClick, url }) => {
  const router = useRouter();
  const checkUrl = [active, router.pathname].includes(url);
  let className = `${styles['sidebar-item']}`;
  if (checkUrl) {
    className += ` ${styles['item-active']}`;
  }

  return (
    <Link href={url}>
      <li className={className} onClick={() => handleClick(url)}>
        <a href={url}>{caption}</a>
      </li>
    </Link>
  );
};

SidebarItem.propTypes = {
  active: PropTypes.string,
  caption: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
};

export default SidebarItem;
