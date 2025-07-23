import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [vize, setVize] = useState(0)
  const [final, setFinal] = useState(0)

  const ortalamaHesapla = () => {
    debugger
    const ortalama = topla() / 2
    return ortalama
  }

  const topla = () => {
    debugger
    const toplam = vize + final
    return toplam
  }
  const yazdir = () => {
    debugger
    console.log('Ortalama: ' + ortalamaHesapla())
  }

  return (
    <>
    <div>
      <div><input type="number" value={vize} onChange={(e) => setVize(Number(e.target.value))} /></div>
      <div><input type="number" value={final} onChange={(e) => setFinal(Number(e.target.value))} /></div>
      <div><button onClick={yazdir}>Ortalama Hesapla</button></div>
    </div>    
    </>
  )
}


export default App;
