import { FcList } from 'react-icons/fc'

const Duties = ({ duties }) => {
  return <div>
    {
        duties.map((duty,index)=>{
            return (
              <div key={index} className='job-desc'>
                <FcList className='job-icon' />
                <p>{duty}</p>
              </div>
            )
        })
    }
  </div>
}
export default Duties
