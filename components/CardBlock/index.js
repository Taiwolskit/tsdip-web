import PropTypes from 'prop-types';
import './styles.scss';

const CardBlock = ({ items }) => (
  <div id='card-block' className='row'>
    {items.map(
      ({ title, description, imageUrl, registrationLink, endDate }) => (
        <div className='card-item col-xs-12 col-sm-6 col-md-4 col-lg-3'>
          <div className='card'>
            <img className='card-img-top' src={imageUrl} alt={title} />
            <div className='card-body'>
              <h5 className='card-title'>{title}</h5>
              <p className='card-text'>{description}</p>
              <a href={registrationLink} className='btn btn-primary'>
                Registration Now
              </a>
            </div>
            <div className='card-footer'>
              <small className='text-muted'>{endDate}</small>
            </div>
          </div>
        </div>
      )
    )}
  </div>
);

CardBlock.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string.isRequired,
      endDate: PropTypes.number,
      imageUrl: PropTypes.string.isRequired,
      registrationLink: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })
  ).isRequired
};

export default CardBlock;
