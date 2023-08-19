
 import { toast } from 'react-toastify'

const SingleItem = ({ item, removeItem, editItem }) => {
  // const [isChecked, setIsChecked] = useState(item.completed)
  return (
    <div className='single-item'>
      <input
        type='checkbox'
        checked={item.completed}
        onChange={() => editItem(item.id, item.completed)}
      />

      <p
        style={{
          textTransform: 'capitalize',
          textDecoration: item.completed && 'line-through',
        }}
      >
        {item.name}
      </p>
      <button
        type='button'
        className={item.completed ? 'delete-disabled' : 'btn remove-btn'}
        onClick={() => removeItem(item.id, item.completed)}
        disabled={item.completed ?true :false}
      >
        delete
      </button>
    </div>
  )
}
export default SingleItem
