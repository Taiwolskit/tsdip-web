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

const Footer = () => (
  <footer id='footer'>
    <div className='container footer-quicklink'>
      <div className='row'>
        <div className='footer-quicklink-block find-us col-6 col-xs-12'>
          <h5 className='footer-quicklink-block-h5'>Find us</h5>
          <p>
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

        <div className='footer-quicklink-block quick-link col-6 col-xs-12'>
          <h5 className='footer-quicklink-block-h5'>Quick links</h5>
          <ul className='quick-link-items'>
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
      </div>
    </div>

    <div className='container'>
      <ul className='footer-social-list'>
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

      <ul className='footer-additional-info'>
        <li>
          <p className='footer-additional-info-copyright'>
            Copyright &copy;2019 | All rights reserved. Powered by
            <a href='/'>Taiwolskit</a>
          </p>
        </li>
        <li>
          <a href='/'>Sitemap</a>
        </li>
        <li>
          <a href='/'>Terms of Use</a>
        </li>
        <li>
          <a href='/'>Private Policy</a>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
