const Categories = ({ list, filteredItems }) => {
  return (
    <div className='btn-container'>
      {list.map((category) => {
        return (
          <button
            key={category}
            className='btn'
            type='button'
            onClick={() => filteredItems(category)}
          >
            {category}
          </button>
        )
      })}
    </div>
  )
}
export default Categories