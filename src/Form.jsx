import { useState } from "react"
import { useRef } from 'react'

 import {toast } from 'react-toastify'

const Form = ({addItem}) => {





    const [newItemName, setNewItemName] = useState('')
    const ref = useRef(null)

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!newItemName){
        toast.error('please provide a value')
           return;
        }

        addItem(newItemName)
        setNewItemName('')
        ref.current.focus()
    }


  return (
    <form onSubmit={handleSubmit}>
      <h4>Remember me :)</h4>
      <div className='form-control'>
        <input
          type='text'
          className='form-input'
          ref={ref}
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
        />
        <button type='submit' className='btn'>
          add item
        </button>
      </div>
    </form>
  )
}
export default Form