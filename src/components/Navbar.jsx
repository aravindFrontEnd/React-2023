
import {SocialLinks} from '../data';
import PageLinks from './PageLinks';
const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <img
            src='../src/images/logo.svg'
            className='nav-logo'
            alt='backroads'
          />
          <button type='button' className='nav-toggle' id='nav-toggle'>
            <i className='fas fa-bars'></i>
          </button>
        </div>

        <PageLinks parent='nav-links' chil='nav-link' />

        <ul className='nav-icons'>
          {/* map way */}
          {SocialLinks.map((link) => {
            const { id, href, fa } = link
            return (
              <li key={id}>
                <a
                  href={href}
                  target='_blank'
                  rel='noreferrer'
                  className='nav-icon'
                >
                  <i className={`fab ${fa}`}></i>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
export default Navbar


