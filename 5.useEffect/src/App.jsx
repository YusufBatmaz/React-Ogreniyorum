import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  useEffect(() => {
    console.log('Her zaman çalışır')
  })

  useEffect(() => {
    console.log('İlk render sonrası çalışır')
  }, [])

  useEffect(() => {
    console.log('İlk render sonrası ve firstName değiştiğinde çalışır')
    console.log(firstName)
  }, [firstName])

  useEffect(() => {
    console.log('İlk render sonrası ve lastName değiştiğinde çalışır')
    console.log('lastName değişti')
  }, [lastName])


  //2 paremetreli useEffect
  useEffect(() => {
    console.log('İlk render sonrası ve firstName ve lastName değiştiğinde çalışır')
    console.log(firstName)
    console.log(lastName)
  }, [firstName, lastName])

  return (
    <>
      <div>
        <button onClick={() => setFirstName('Yusuf')}>Adını Değiştir</button>
        <button onClick={() => setLastName('Batmaz')}>Soyadını Değiştir</button>
        <div>{firstName}</div>
        <div>{lastName}</div>
      </div>
    </>
  )
}

export default App
