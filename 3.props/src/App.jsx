import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from './Product'
import Container from './Container'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Container />
      <div>
        <Product productName="Ayakkabı" productPrice={3200}/>
        <Product productName="Pantolon" productPrice={1200}/>
      </div> */}


      <div>
        {/* Component içinde component kullanımı */}
        <Container>
          <product productName="Ayakkabı" productPrice={3200}/>
          <product productName="Pantolon" productPrice={1200}/>
        </Container>
      </div>
    </>
  )
}

export default App
