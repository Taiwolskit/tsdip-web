import PropTypes from 'prop-types';
import Link from 'next/link';
import SidebarItem from './SidebarItem';
import styles from './Sidebar.module.scss';

const Sidebar = ({ items, sidebarActive, sidebarClick }) => (
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
      {items.map(({ caption, link_url }) => (
        <SidebarItem
          active={sidebarActive}
          caption={caption}
          handleClick={sidebarClick}
          key={caption}
          url={link_url}
        />
      ))}
    </ul>
  </div>
);

Sidebar.defaultProps = {
  items: [
    { caption: 'Profile', link_url: '/manage/profile' },
    { caption: 'Organization', link_url: '/manage/organization' },
    { caption: 'Event', link_url: '/manage/events' },
  ],
};

Sidebar.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      caption: PropTypes.string.isRequired,
      link_url: PropTypes.string.isRequired,
    })
  ).isRequired,
  sidebarActive: PropTypes.string,
  sidebarClick: PropTypes.func.isRequired,
};

export default Sidebar;
