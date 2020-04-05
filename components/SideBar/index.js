import PropTypes from 'prop-types';
import Link from 'next/link';
import { useRouter } from 'next/router';
import SidebarItem from './SidebarItem';
import styles from './Sidebar.module.scss';

const Sidebar = ({ items, itemActive, sidebarClick }) => {
  const router = useRouter();

  return (
    <div id='sidebar' className={styles['sidebar']}>
      <div id='sidebar-header' className={styles['sidebar-header']}>
        <Link href='/dashboard'>
          <h3>Dashboard</h3>
        </Link>
        <Link href='/dashboard'>
          <h3 className={styles['sidebar-header-short']}>DB</h3>
        </Link>
      </div>

      <ul className='list-unstyled list-group'>
        {items.map(({ caption, url }) =>
          ([itemActive, router.pathname].indexOf(url) > -1) ? (
            <SidebarItem
              active={true}
              caption={caption}
              handleClick={sidebarClick}
              key={caption}
              url={url}
            />
          ) : (
            <SidebarItem
              caption={caption}
              handleClick={sidebarClick}
              key={caption}
              url={url}
            />
          )
        )}
      </ul>
    </div>
  );
};

Sidebar.defaultProps = {
  items: [
    { caption: 'Profile', url: '/manage/profile' },
    { caption: 'Studio', url: '/manage/studios' },
    { caption: 'Event', url: '/manage/events' }
  ]
};

Sidebar.propTypes = {
  itemActive: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      caption: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })
  ).isRequired,
  sidebarClick: PropTypes.func.isRequired
};

export default Sidebar;
