import PropTypes from 'prop-types';

const Title = (props) => {
  const { title, subtitle } = props
  return (
    <div className='section-title'>
      <h2>
        {title} <span>{subtitle}</span> 
      </h2>
    </div>
  )
}
export default Title

Title.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
}
