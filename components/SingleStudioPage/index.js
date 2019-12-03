import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faLocationArrow,
  faPhone
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import Carousel from '../Carousel';
import './styles.scss';

const carouselList = [
  {
    caption: 'item 1',
    description: 'item 1',
    imageUrl:
      'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16ebd0afdf6%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16ebd0afdf6%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.9140625%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E'
  },
  {
    caption: 'item 2',
    description: 'item 2',
    imageUrl:
      'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16ebd0afdf7%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16ebd0afdf7%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E'
  },
  {
    caption: 'item 3',
    description: 'item 3',
    imageUrl:
      'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16ebd0afdf8%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16ebd0afdf8%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22276.9921875%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E'
  }
];

const SingleStudioPage = ({ name }) => {
  return (
    <main id='single-studio-page' className='container-fluid'>
      <h1 className='display-1 row justify-content-center'>{name}</h1>
      <section className='row justify-content-center studio-info'>
        <picture class='col-sm-12 col-md-6 studio-info-picture'>
          <Carousel items={carouselList} />
        </picture>
        <div class='col-sm-12 col-md-6 studio-info-contact'>
          <h2 className='text-center'>聯絡方式</h2>
          <table className='table table-striped table-hover'>
            <tbody>
              <tr>
                <th scope='row'>
                  <FontAwesomeIcon icon={faLocationArrow} />
                </th>
                <td>台北市</td>
              </tr>
              <tr>
                <th scope='row'>
                  <FontAwesomeIcon icon={faEnvelope} />
                </th>
                <td>mm@google.com</td>
              </tr>
              <tr>
                <th scope='row'>
                  <FontAwesomeIcon icon={faPhone} />
                </th>
                <td>886021454</td>
              </tr>
              <tr>
                <th scope='row'>
                  <FontAwesomeIcon icon={faFacebook} />
                </th>
                <td>886021454</td>
              </tr>
              <tr>
                <th scope='row'>
                  <FontAwesomeIcon icon={faInstagram} />
                </th>
                <td>886021454</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className='row justify-content-center curriculum'>
        <h2>{name} 課表</h2>
      </section>
      <section className='row justify-content-center studio-plan'>
        <h2>{name} 付費方案</h2>
      </section>
    </main>
  );
};

SingleStudioPage.propTypes = {
  name: PropTypes.string
};

export default SingleStudioPage;
