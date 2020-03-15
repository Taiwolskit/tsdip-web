import styles from './DashboardPage.module.scss';

const DashboardPage = () => {
  return (
    <div className='wrapper'>
      <nav id='sidebar'>
        <div className='sidebar-header'>
          <h3>Bootstrap Sidebar</h3>
          <strong>BS</strong>
        </div>

        <ul className='list-unstyled components'>
          <li className='active'>
            <a
              href='#homeSubmenu'
              data-toggle='collapse'
              aria-expanded='false'
              className='dropdown-toggle'>
              <i className='fas fa-home'></i>
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
            <a href='#'>
              <i className='fas fa-briefcase'></i>
              About
            </a>
            <a
              href='#pageSubmenu'
              data-toggle='collapse'
              aria-expanded='false'
              className='dropdown-toggle'>
              <i className='fas fa-copy'></i>
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
              <i className='fas fa-image'></i>
              Portfolio
            </a>
          </li>
          <li>
            <a href='#'>
              <i className='fas fa-question'></i>
              FAQ
            </a>
          </li>
          <li>
            <a href='#'>
              <i className='fas fa-paper-plane'></i>
              Contact
            </a>
          </li>
        </ul>

        <ul className='list-unstyled CTAs'>
          <li>
            <a
              href='https://bootstrapious.com/tutorial/files/sidebar.zip'
              className='download'>
              Download source
            </a>
          </li>
          <li>
            <a
              href='https://bootstrapious.com/p/bootstrap-sidebar'
              className='article'>
              Back to article
            </a>
          </li>
        </ul>
      </nav>

      <div id='content'>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
          <div className='container-fluid'>
            <button type='button' id='sidebarCollapse' className='btn btn-info'>
              <i className='fas fa-align-left'></i>
              <span>Toggle Sidebar</span>
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default DashboardPage;

// <button
//   class='navbar-toggler'
//   type='button'
//   data-toggle='collapse'
//   data-target='#navbarToggleExternalContent'
//   aria-controls='navbarToggleExternalContent'
//   aria-expanded='false'
//   aria-label='Toggle navigation'>
//   <span class='navbar-toggler-icon'></span>
// </button>;

// <button
//   className='navbar-toggler'
//   type='button'
//   data-toggle='collapse'
//   data-target='#navbarToggler'
//   aria-controls='navbarToggler'
//   aria-expanded='false'
//   aria-label='Toggle navigation'>
//   <span className='navbar-toggler-icon'></span>
// </button>;
