import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  // Bir state'in değeri set metodu kullanırlarak değiştirildiğinde component tekrar render edilir.
  const [firstName, setFirstName] = useState('Yusuf')
  const [lastName, setLastName] = useState('Batmaz')

  
  const handleChangeFirstName = () => {
    setFirstName('John')
  }

  const [count, setCount] = useState(0)
  const arttir = () => {
    setCount(count + 1)
  }

  const azalt = () => {
    setCount(count - 1)
  }
  
  return (
    <>
      <div>
        <h1>Hello {firstName} {lastName}</h1>
      </div>
      <div>
        <button onClick={handleChangeFirstName}>Change First Name</button>
      </div>


      <div>
        <div>{count}</div>
        <button onClick={arttir}>Arttır</button>
        <button onClick={azalt}>Azalt</button>
        
      </div>
    </>
  )
}

export default App
