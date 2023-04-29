import { SocialLinks } from "../data"
import PageLinks from './PageLinks'

const Footer = () => {
  return (
    <footer className='section footer'>
      <PageLinks parent='footer-links' chil='footer-link' />
      <ul className='footer-icons'>
        {SocialLinks.map((link) => {
          return (
            <li key={link.id}>
              <a
                href={link.href}
                target='_blank'
                rel='noreferrer'
                className='footer-icon'
              >
                <i className={`fab ${link.fa}`}></i>
              </a>
            </li>
          )
        })}
      </ul>
      <p className='copyright'>
        copyright &copy; Backroads travel tours company
        <span id='date'>{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  )
}
export default Footer