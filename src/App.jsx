import { useState } from "react"
import Form from "./Form"
import { nanoid } from "nanoid"
import Items from "./Items"
 import { ToastContainer, toast } from 'react-toastify'

const setLocalStorage = (items) => {
  localStorage.setItem('list', JSON.stringify(items))
}

const getLocalStorage = () =>{
  let list = localStorage.getItem('list');
  if(list){
     list = JSON.parse(localStorage.getItem('list'));
  }
  else{
    list =[]
  }
  return list;
}

const App = () => {

  const [items, setItems] = useState(getLocalStorage())

  const addItem = (item) => {
    const newItem = {
      name : item,
      completed : false,
      id : nanoid(),
    }
  const newItems = [...items, newItem]
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success('item added to list');

  }


  const removeItem = (itemId) =>{

    const newItems = items.filter( item => item.id !== itemId);

    setItems(newItems)
      setLocalStorage(newItems)
    toast.info('item deleted')

  }

  const editItem = (itemId,completed) =>{
    const newItems = items.map((item)=>{
      if(item.id === itemId){
      const newItem = {...item,completed: !item.completed}
      return newItem;
      }
      return item;
    })
     setItems(newItems)
     setLocalStorage(newItems)
     if(!completed){
      toast.warn('task done')
     }
  }
  return (
    <section className='section-center'>
      <ToastContainer
        position='top-right'
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover={false}
        theme='dark'
      />
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} editItem={editItem} />
    </section>
  )
}
export default App