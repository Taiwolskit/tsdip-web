import PropTypes from 'prop-types';

const Carousel = ({ items }) => (
  <div id='carousel' className='carousel slide' data-ride='carousel'>
    <ol className='carousel-indicators'>
      {items.map((item, index) => {
        if (index < 1) {
          return (
            <li
              data-target='#carousel'
              data-slide-to='0'
              className='active'></li>
          );
        } else {
          return (
            <li data-target='#carousel' data-slide-to={index}></li>
          );
        }
      })}
    </ol>

    <div className='carousel-inner'>
      {items.map(({ caption, description, imageUrl }, index) => {
        let className = 'carousel-item';
        if (index < 1) {
          className += ' active';
        }

        return (
          <div className={className}>
            <img className='d-block w-100' src={imageUrl} alt={caption} />
            <div class='carousel-caption d-none d-md-block'>
              <h5>{caption}</h5>
              <p>{description}</p>
            </div>
          </div>
        );
      })}
    </div>

    <a
      className='carousel-control-prev'
      href='#carousel'
      role='button'
      data-slide='prev'>
      <span className='carousel-control-prev-icon' aria-hidden='true'></span>
      <span className='sr-only'>Previous</span>
    </a>
    <a
      className='carousel-control-next'
      href='#carousel'
      role='button'
      data-slide='next'>
      <span className='carousel-control-next-icon' aria-hidden='true'></span>
      <span className='sr-only'>Next</span>
    </a>
  </div>
);

Carousel.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      caption: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired
    })
  ).isRequired
};

export default Carousel;
