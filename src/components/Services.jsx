import Title from "./Title";
import {ServicesText} from '../data'
const Services = () => {
  return (
    <section className='section services' id='services'>
      <Title title='our' subtitle='services' />
      <div className='section-center services-center'>
        {ServicesText.map((link)=>{
          return (
            <article className='service' key={link.id}>
              <span className='service-icon'>
                <i className={link.icon}></i>
              </span>
              <div className='service-info'>
                <h4 className='service-title'>{link.title}</h4>
                <p className='service-text'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores, officia.
                </p>
              </div>
            </article>
          )
        })}

      </div>
    </section>
  )
}
export default Services