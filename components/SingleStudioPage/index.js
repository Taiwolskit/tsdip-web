import PropTypes from 'prop-types';
import './styles.scss';

const SingleStudioPage = ({ name }) => {
  return <main id='single-studio-page' className='row'>{name}</main>;
};

SingleStudioPage.propTypes = {
  name: PropTypes.string.isRequired
};

export default SingleStudioPage;
