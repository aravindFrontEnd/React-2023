import { useState, useEffect } from 'react'
import Loading from './components/Loading'
import Tours from './components/Tours'

const url = 'https://course-api.com/react-tours-project'

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [tours, setTours] = useState([])


  const removeTour = (id) =>{
    const newTours = tours.filter((tour)=> tour.id!==id)
    setTours(newTours)
  }

  const fetchURL = async () => {
    setIsLoading(true)
    try {
      const response = await fetch(url)
      const tours = await response.json()
      setTours(tours)
      console.log(tours)
    } catch (err) {
      console.log(err)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    fetchURL()
  }, [])

  if(isLoading){
    return <main>
      <Loading/>
    </main>
  }
// refresh the tours

if(tours.length === 0){
 return (
   <main className='center-align'>
     <div className='title'>
       <h2>No more tours left</h2>
       <div className='title-underline'></div>
     </div>
     <button
       className='btn '
       onClick={fetchURL}
       style={{ marginBlock: '2rem' }}
     >
       refresh
     </button>
   </main>
 )
}

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  )
  return (
    <>
      {/* {
    tours.map((item)=>{
    const {id,name,image,info,price} = item;
    return (
      <div key={id}>
        <h2>{name}</h2>
        <img src={image} alt={name} className='img' />
        <h3>info: {info}</h3>
        <p>cost:{price}</p>
      </div>
    )
  })} */}
    </>
  )
}
export default App
