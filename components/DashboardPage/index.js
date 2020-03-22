import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAlignLeft,
  faAlignJustify
} from '@fortawesome/free-solid-svg-icons';
import styles from './DashboardPage.module.scss';

const DashboardPage = () => {
  return (
    <main id='dashboard-pagex'>
      <nav id='sidebarx'>
        <div className='sidebar-header'>
          <h3>Dashboard</h3>
          <strong>DB</strong>
        </div>

        <ul className='list-unstyled components'>
          <li className='active'>
            <a
              href='#homeSubmenu'
              data-toggle='collapse'
              aria-expanded='false'
              className='dropdown-toggle'>
              Home
            </a>
            <ul className='collapse list-unstyled' id='homeSubmenu'>
              <li>
                <a href='#'>Home 1</a>
              </li>
              <li>
                <a href='#'>Home 2</a>
              </li>
              <li>
                <a href='#'>Home 3</a>
              </li>
            </ul>
          </li>
          <li>
            <a
              href='#pageSubmenu'
              data-toggle='collapse'
              aria-expanded='false'
              className='dropdown-toggle'>
              Pages
            </a>
            <ul className='collapse list-unstyled' id='pageSubmenu'>
              <li>
                <a href='#'>Page 1</a>
              </li>
              <li>
                <a href='#'>Page 2</a>
              </li>
              <li>
                <a href='#'>Page 3</a>
              </li>
            </ul>
          </li>
          <li>
            <a href='#'>
              Portfolio
            </a>
          </li>
          <li>
            <a href='#'>
              FAQ
            </a>
          </li>
          <li>
            <a href='#'>
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <div id='content'>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
          <button type='button' id='sidebarCollapse' className='btn btn-info'>
            <FontAwesomeIcon icon={faAlignLeft} />
            <span>Toggle Sidebar</span>
          </button>
        </nav>
      </div>
    </main>
  );
};

export default DashboardPage;
