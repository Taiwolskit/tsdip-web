import React from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@material-ui/core';

const CarouselItem = ({ caption, description, images }) => {
  return (
    <Paper>
      {images.map((url, index) => (
        <img key={index} className='d-block w-100' src={url} alt={caption} />
      ))}
      <div className='carousel-caption d-none d-md-block'>
        <h2>{caption}</h2>
        <p>{description}</p>
      </div>
    </Paper>
  );
};

const App = ({ items }) => (
  <Carousel indicators={false} navButtonsAlwaysVisible={true} autoPlay={false}>
    {items.map(({ caption, description, images }, index) => (
      <CarouselItem
        key={index}
        caption={caption}
        description={description}
        images={images}
      />
    ))}
  </Carousel>
);

App.defaultProps = {
  items: [
    {
      caption: 'Random Name #1',
      description: 'Probably the most random thing you have ever seen!',
      images: [
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16ebd0afdf8%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16ebd0afdf8%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22276.9921875%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
      ],
    },
    {
      caption: 'Random Name #2',
      description: 'Hello World!',
      images: [
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16ebd0afdf7%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16ebd0afdf7%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
      ],
    },
  ],
};

App.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      caption: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      images: PropTypes.arrayOf(PropTypes.string),
    })
  ).isRequired,
};

export default App;
