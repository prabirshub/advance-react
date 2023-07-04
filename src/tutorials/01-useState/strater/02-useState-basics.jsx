import { useState } from 'react'

const UseStateBasics = () => {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <h2>You clicked {count} times</h2>
      <button type='button' onClick={handleClick} className='btn'>
        click me
      </button>
    </div>
  )
}
export default UseStateBasics
