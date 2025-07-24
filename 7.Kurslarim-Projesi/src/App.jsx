import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import { kurslar } from './Data'
import Kurs from './Kurs'
import './css/Kurs.css'

function App() {


  return (
    <>
      <Header />
      <div className='kurs-main'>
      {
        kurslar?.map((kurs) => (
          <Kurs key={kurs.id} kurs={kurs} />
        ))
      }
      </div>
    </>
  )
}

export default App
