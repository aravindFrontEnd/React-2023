import { useState, useEffect } from 'react'
import text from './data'

const App = () => {
  const [paragraph, setParagraph] = useState([])

  const [number, setNumber] = useState(0)

  const generatePara = () => {
    setParagraph(text.slice(0, parseInt(number)))
  }

  return (
    <>
      <h2>enter the number of paragraphs</h2>
      <br />
      <label htmlFor='number'>Number: </label>
      <input
        type='number'
        name='number'
        id='number'
        min={1}
        max={9}
        style={{ display: 'inline', marginRight: '5px' }}
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button
        type='button'
        style={{ cursor: 'pointer' }}
        onClick={generatePara}
      >
        Generate
      </button>

      {paragraph.map((para, i) => {
        return (
          <p key={i}>
            {i + 1}
            {para}
          </p>
        )
      })}
    </>
  )
}
export default App
