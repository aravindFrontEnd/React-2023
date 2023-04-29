import { Pagelinks } from '../data'
import PropTypes from 'prop-types'

const PageLinks = (props) => {
    const {parent,chil} = props;
  return (
    <ul className={parent} id='nav-links'>
      {/* map way */}
      {Pagelinks.map((link) => {
        return (
          <li key={link.id}>
            <a href={link.href} className={chil}>
              {link.title}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
export default PageLinks

PageLinks.propTypes = {
  parent: PropTypes.string.isRequired,
  chil: PropTypes.string.isRequired // Add the missing prop type validation
}
