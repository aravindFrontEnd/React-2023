import Tour from "./Tour";

const Tours = ({ tours, removeTour }) => {
  console.log(tours)
  return (
    <section>
      <div className='title'>
        <h2>Papa Jaan Tours</h2>
        <div className='title-underline'></div>
      </div>
      <div className='tours'>
        {tours.map((item) => {
          return <Tour {...item} key={item.id} removeTour={removeTour} />
        })}
      </div>
    </section>
  )
}
export default Tours