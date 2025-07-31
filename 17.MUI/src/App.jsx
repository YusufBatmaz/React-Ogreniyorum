import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MUIButton from './components/MUIButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <MUIButton />
    </div>
  )
}

export default App
