import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {cars} from './cars'
import Car from './Car';





function CarList() {
  return (
    <section className='carlist'>
      <h1> Best Cars in India</h1>
{/* whole cars data */}
      {cars.map((car, index) => {
        return (
          // Individual car
        <Car {...car}
        key={car.id} />
        )
      })}
    </section>
  )
}


// const Car = ({ img, title, author}) => {

//   return (
//     <article className='car'>
//       <img src={img} alt={title} />
//       <h2>{title}</h2>
//       <h4>{author} </h4>
//     </article>
//   )
// }


// const EventExamples = () => {
//   return (
//     <section>
//       <form>
//         <h2>Typical Form</h2>
//         <input
//           type='text'
//           name='example'
//           onChange={(e) => {
//             console.log(e.target.value);
//             console.log(e.target.name)}}
//           style={{ margin: '1rem 0' }}
//         />
//       </form>
//       <button onClick={() => console.log('you clicked me')}>click me</button>
//     </section>
//   )
// }

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<CarList />)
