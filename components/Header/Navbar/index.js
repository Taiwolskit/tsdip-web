import NavItem from './NavItem';

const navList = [
  {
    active: 'active',
    description: '有哪些街舞活動可以參加呢?',
    link: '/events',
    name: '活動介紹',
  },
];

const Navbar = () => (
  <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
    <a className='navbar-brand' href='/'>
      Taiwan Street Dance
    </a>

    <button
      className='navbar-toggler'
      type='button'
      data-toggle='collapse'
      data-target='#navbarToggler'
      aria-controls='navbarToggler'
      aria-expanded='false'
      aria-label='Toggle navigation'>
      <span className='navbar-toggler-icon'></span>
    </button>
    <div id='navbarToggler' className='collapse navbar-collapse'>
      <ul className='navbar-nav ml-auto'>
        {navList.map(({ active, description, link, name }) => (
          <NavItem
            active={active}
            description={description}
            key={name}
            link={link}
            name={name}
          />
        ))}
      </ul>
    </div>
  </nav>
);

export default Navbar;
