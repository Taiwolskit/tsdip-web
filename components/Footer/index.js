import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faLocationArrow,
  faPhone
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';
import NavItem from '../Header/Navbar/NavItem';
import './style.scss';

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

const loginLink = [
  {
    link: '/profile',
    name: '個人檔案'
  },
  {
    link: '/logout',
    name: '登出'
  }
];

const Footer = ({ isLoggedIn = true }) => (
  <footer id='footer'>
    <div className='container bottom_border'>
      <div className='row'>
        <div className=' col-sm-4 col-md col-12 col'>
          <h5 className='headin5_amrc col_white_amrc pt2'>Find us</h5>
          <p className='mb10'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
          <p>
            <FontAwesomeIcon icon={faLocationArrow} /> 9878/25 sec 9 rohini 35{' '}
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone} /> +91-9999878398{' '}
          </p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} /> info@example.com{' '}
          </p>
        </div>

        <div className=' col-sm-4 col-md  col-6 col'>
          <h5 className='headin5_amrc col_white_amrc pt2'>Quick links</h5>
          <ul className='footer_ul_amrc'>
            <li>
              <a href='http://webenlance.com'>Image Rectoucing</a>
            </li>
            <li>
              <a href='http://webenlance.com'>Clipping Path</a>
            </li>
            <li>
              <a href='http://webenlance.com'>Hollow Man Montage</a>
            </li>
            <li>
              <a href='http://webenlance.com'>Ebay & Amazon</a>
            </li>
            <li>
              <a href='http://webenlance.com'>Hair Masking/Clipping</a>
            </li>
            <li>
              <a href='http://webenlance.com'>Image Cropping</a>
            </li>
          </ul>
        </div>

        <div className=' col-sm-4 col-md  col-6 col'>
          <h5 className='headin5_amrc col_white_amrc pt2'>Quick links</h5>
          <ul className='footer_ul_amrc'>
            <li>
              <a href='http://webenlance.com'>Remove Background</a>
            </li>
            <li>
              <a href='http://webenlance.com'>Shadows & Mirror Reflection</a>
            </li>
            <li>
              <a href='http://webenlance.com'>Logo Design</a>
            </li>
            <li>
              <a href='http://webenlance.com'>Vectorization</a>
            </li>
            <li>
              <a href='http://webenlance.com'>Hair Masking/Clipping</a>
            </li>
            <li>
              <a href='http://webenlance.com'>Image Cropping</a>
            </li>
          </ul>
        </div>

        <div className=' col-sm-4 col-md  col-12 col'>
          <h5 className='headin5_amrc col_white_amrc pt2'>Follow us</h5>

          <ul className='footer_ul2_amrc'>
            <li>
              <a href='#'>
                <FontAwesomeIcon
                  className='fab fleft padding-right'
                  icon={faTwitter}
                />{' '}
              </a>
              <p>
                Lorem Ipsum is simply dummy text of the printing...
                <a href='#'>https://www.lipsum.com/</a>
              </p>
            </li>
            <li>
              <a href='#'>
                <FontAwesomeIcon
                  className='fab fleft padding-right'
                  icon={faTwitter}
                />{' '}
              </a>
              <p>
                Lorem Ipsum is simply dummy text of the printing...
                <a href='#'>https://www.lipsum.com/</a>
              </p>
            </li>
            <li>
              <a href='#'>
                <FontAwesomeIcon
                  className='fab fleft padding-right'
                  icon={faTwitter}
                />{' '}
              </a>
              <p>
                Lorem Ipsum is simply dummy text of the printing...
                <a href='#'>https://www.lipsum.com/</a>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className='container'>
      <ul className='foote_bottom_ul_amrc'>
        {linkList.map(({ active, description, link, name }) => (
          <NavItem
            active={active}
            description={description}
            key={name}
            link={link}
            name={name}
          />
        ))}
        {isLoggedIn ? (
          <li className='nav-item dropdown'>
            <a
              className='nav-link dropdown-toggle'
              href='#'
              id='navbarDropdownMenuLink'
              role='button'
              data-toggle='dropdown'
              aria-haspopup='true'
              aria-expanded='false'>
              使用者
            </a>
            <div
              className='dropdown-menu'
              aria-labelledby='navbarDropdownMenuLink'>
              {loginLink.map(({ name, link }) => (
                <Link key={name} href={link}>
                  <a className='dropdown-item' href={link}>
                    {name}
                  </a>
                </Link>
              ))}
            </div>
          </li>
        ) : (
          <NavItem key='登入' name='登入' link='#' />
        )}
      </ul>

      <ul className='social_footer_ul'>
        <li>
          <a href='http://webenlance.com'>
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </li>
        <li>
          <a href='http://webenlance.com'>
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
        <li>
          <a href='http://webenlance.com'>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li>
          <a href='http://webenlance.com'>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
      </ul>

      <ul className='additional-info'>
        <li>
          <p className='text-center'>
            Copyright &copy;2019 | All rights reserved. Powered by{' '}
            <a href='#'>Taiwolskit</a>
          </p>
        </li>
        <li>
          <a>Sitemap</a>
        </li>
        <li>
          <a>Terms of Use</a>
        </li>
        <li>
          <a>Private Policy</a>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
