import Title from "./Title"
import { TourData } from "../data"
const Tours = () => {
  return (
    <section className='section' id='tours'>
      <Title title='our' subtitle='tours' />

      <div className='section-center featured-center'>
        {TourData.map((tour)=>{
          return (
            <article className='tour-card' key={tour.id}>
              <div className='tour-img-container'>
                <img
                  src={tour.img}
                  className='tour-img'
                  alt=''
                />
                <p className='tour-date'>{tour.date}</p>
              </div>
              <div className='tour-info'>
                <div className='tour-title'>
                  <h4>{tour.name} Adventure</h4>
                </div>
                <p>{tour.info}</p>
                <div className='tour-footer'>
                  <p>
                    <span>
                      <i className={tour.icon}></i>
                    </span>{' '}
                    {tour.name}
                  </p>
                  <p>{tour.days}</p>
                  <p>{tour.price}</p>
                </div>
              </div>
            </article>
          )
        })}



      </div>
    </section>
  )
}
export default Tours