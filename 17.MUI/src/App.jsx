import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MUIButton from './components/MUIButton'
import MUITextField from './components/MUITextField'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <MUIButton /> */}
      <MUITextField />
    </div>
  )
}

export default App
