import { useState } from "react"




const Tour = ({ id, name, image, info, price, removeTour }) => {
  // const { id, name, image, info, price } = tour;

  const[readfull,setReadFull]=useState(true);

  const switchText = ()=>{
    setReadFull(!readfull);
  }
  return (
    <article className='single-tour'>
      <img src={image} alt={name} className='img' />
      <span className='tour-price'>${price}</span>
      <div className='tour-info'>
        <h5>{name}</h5>
        <p>{readfull ? `${info.substring(0, 200)}...` : info}</p>
        <div type='button' className='info-btn' onClick={switchText} style={{marginBlock: '1rem'}}>
          {readfull ?'read more' :'show less'}
        </div>
        <button className='btn btn-block' onClick={() => removeTour(id)}>
          not interested
        </button>
      </div>
    </article>
  )
}
export default Tour