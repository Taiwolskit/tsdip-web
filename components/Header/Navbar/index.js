import NavItem from './NavItem';

const linkList = [
  {
    link: '/studios',
    description: '我想知道去哪裡學舞',
    name: '街舞工作室介紹'
  },
  {
    link: '/events',
    description: '哪裡可以參加活動',
    name: '活動介紹'
  },
  {
    link: '/groups',
    description: '台灣有哪些舞團呢？',
    name: '舞團介紹'
  },
  {
    link: '/dancers',
    description: '老師好帥，我想認識他',
    name: '舞者介紹'
  },
  {
    link: '/areas',
    description: '可以去哪裡練舞',
    name: '我想練舞'
  }
];

const Navbar = () => (
  <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
    <a className='navbar-brand mb-0 h1' href='/'>
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

    <div className='collapse navbar-collapse' id='navbarToggler'>
      <ul className='navbar-nav ml-auto mt-2 mt-lg-0'>
        {linkList.map(({ active, description, link, name }) => (
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
