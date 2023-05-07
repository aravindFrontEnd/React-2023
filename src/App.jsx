import data from './data'
import { useState } from 'react';
const App = () => {

const [person,setPerson] = useState(data);


const clearList =() =>{
  setPerson([])
}

  return (
    <main>
      <section className='container'>
        {person.map((item) => {
          return (
            <div key={item.id} className='person'>
              <img src={item.image} alt={item.name} className='img' />
              <div>
                <h4>{item.name}</h4>
                <p>{item.age}</p>
              </div>
            </div>
          )
        })}
        <div style={{display: 'block', marginBlock:'2rem'}}>{person.length} person's birthaday</div>
        <button type='button' className='btn btn-block' onClick={clearList}>
          Clear list
        </button>
      </section>
    </main>
  )
};
export default App;
