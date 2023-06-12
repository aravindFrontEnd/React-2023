import {shortList,list,longList} from './data'
import { useEffect, useState } from 'react';
import {FaQuoteRight} from 'react-icons/fa';
import {FiChevronLeft,FiChevronRight} from 'react-icons/fi';

const App = () => {

  const [people, setPeople] = useState(list);

  const [currentPerson,setCurrentPerson] = useState(0);


  const previousSlide = () =>{

 setCurrentPerson((old) => {
   const result = (old - 1 + people.length ) % people.length
   return result
 })

  }

 const nextSlide = () =>{

  setCurrentPerson((old) =>{
 const result = (old + 1) % people.length;
 return result;
  });

 }

 useEffect(() => {
   const setId = setInterval(() => {
     nextSlide()
   }, 2500)

   return () => {
     clearInterval(setId)
   }
 }, [currentPerson])

  return (
    <section className='slider-container'>
      {people.map((person,personIndex) => {
        const { id, image, name, title, quote } = person

        return (
          <article
            className='slide '
            style={{
              transform: `translateX(${100 * (personIndex - currentPerson) }%)`,
            }}
            key={id}
          >
            <img src={image} alt={name} className='person-img' />
            <h5 className='name'>{name}</h5>
            <p className='title'>{title}</p>
            <p className='text'>{quote}</p>
            <FaQuoteRight className='icon' />
          </article>
        )
      })}
      <button type='button' className='prev' onClick={previousSlide}>
        <FiChevronLeft />
      </button>

      <button type='button' className='next' onClick={nextSlide}>
        <FiChevronRight />
      </button>
    </section>
  )
};
export default App;
