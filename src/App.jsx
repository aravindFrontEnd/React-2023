import persons from './data'
import { useState } from 'react';
import {
  FaChevronCircleLeft,
  FaChevronCircleRight,
  FaQuoteRight,
} from 'react-icons/fa'


const App = () => {

  const [index, setIndex] = useState(0)
  const { name, job, image,text } = persons[index]



   const checkNumber = (number) => {
     if (number > persons.length - 1) {
       return 0
     }
     if (number < 0) {
       return persons.length - 1
     }
     return number
   }
   const nextPerson = () => {
     setIndex((index) => {
       let newIndex = index + 1
       return checkNumber(newIndex)
     })
   }
   const prevPerson = () => {
     setIndex((index) => {
       let newIndex = index - 1
       return checkNumber(newIndex)
     })
   }
   const randomPerson = () => {
     let randomNumber = Math.floor(Math.random() * persons.length)
     if (randomNumber === index) {
       randomNumber = index + 1
     }
     setIndex(checkNumber(randomNumber))
   }

  return (
    <>
      <main>
        <article className='review'>
          <div className='img-container'>
            <img src={image} alt={name} className='person-img' />
            <span className='quote-icon'>
              <FaQuoteRight />
            </span>
          </div>
          <h4 className='author'>{name}</h4>
          <p className='job'>{job}</p>
          <p className='info'>{text}</p>
          <div className='btn-container'>
            <button className='prev-btn' onClick={prevPerson}>
              <FaChevronCircleLeft />
            </button>
            <button className='next-btn' onClick={nextPerson}>
              <FaChevronCircleRight />
            </button>
          </div>
          <button className='btn btn-hipster' onClick={randomPerson}>
            surprise me
          </button>
        </article>
      </main>
    </>
  )
};
export default App;
