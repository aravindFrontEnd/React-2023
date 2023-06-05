import { useEffect, useState } from 'react'
import JobInfo from './JobInfo'
import BtnContainer from './BtnContainer'

const url = 'https://course-api.com/react-tabs-project'

const App = () => {

  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState([])
  const [currentItem, setCurrentItem] = useState(0)

  const fetchURL = async () => {
    const response = await fetch(url)
    const result = await response.json()
    setData(result)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchURL()
  }, [])


  if(isLoading){
    return <section className="jobs-center">
      <div className="loading"></div>
    </section>
  }
  return (
    <section className='jobs-center'>
      {/* button component */}
      <BtnContainer
        data={data}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
      />
      <JobInfo data={data} currentItem={currentItem} />
    </section>
  )
}
export default App