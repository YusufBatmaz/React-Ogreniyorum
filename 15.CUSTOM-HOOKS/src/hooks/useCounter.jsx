import { useState } from 'react'

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(0)

  const increase = () => {
    setCount(count + 1)
  }
  const decrease = () => {
    setCount(count - 1)
  }


  return [count, increase, decrease]
}

export default useCounter