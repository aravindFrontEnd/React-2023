import Duties from "./Duties";

const JobInfo = ({ data, currentItem }) => {
  const { title, dates, duties, company } = data[currentItem];
  return (
    <article className='job-info'>
      <h3 className='job-title'>{title}</h3>
      <span className='job-company'>{company}</span>
      <p className='job-date'>{dates}</p>
      <Duties duties={duties} />
    </article>
  )
}
export default JobInfo