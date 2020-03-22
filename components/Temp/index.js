import SidebarItem from './SidebarItem';
import styles from './DashboardPage.module.scss';


const DashboardPage = () => (
  <main id='dashboard-page' className={styles['dashboard-page']}>
    <div id='sidebar' className={styles['dashboard-page-sidebar']}>
      <div
        id='dashboard-page-sidebar-header'
        className={styles['dashboard-page-sidebar-header']}>
        <h3>Dashboard</h3>
        <h3 className={styles['dashboard-page-sidebar-header-short']}>DB</h3>
      </div>

      <ul className='list-unstyled list-group dashboard-page-sidebar-items'>
        <SidebarItem caption='Profile' url='/profile' />
        <SidebarItem caption='Studio' url='/manage/studios' />
      </ul>
    </div>
    <div id='content' className={styles['dashboard-page-content']}></div>
  </main>
);

export default DashboardPage;
