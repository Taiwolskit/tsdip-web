import PropTypes from 'prop-types';
import SidebarItem from './SidebarItem';
import styles from './Sidebar.module.scss';

const Sidebar = ({ items }) => (
  <div id='sidebar' className={styles['sidebar']}>
    <div id='sidebar-header' className={styles['sidebar-header']}>
      <h3>Dashboard</h3>
      <h3 className={styles['sidebar-header-short']}>DB</h3>
    </div>

    <ul className='list-unstyled list-group'>
      {items.map(({ caption, url }) => (
        <SidebarItem key={caption} caption={caption} url={url} />
      ))}
    </ul>
  </div>
);

Sidebar.defaultProps = {
  items: [
    { caption: 'Profile', url: '/profile' },
    { caption: 'Studio', url: '/manage/studios' },
    { caption: 'Event', url: '/manage/events' }
  ]
};

Sidebar.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      caption: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })
  ).isRequired
};

export default Sidebar;
