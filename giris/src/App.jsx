import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let a = 10;
  const firstName = "John";

  let vize1 = 60;
  let vize2 = 80;

  let sonuc = false;

  let isimler = ["Yusuf", "Ahmet", "Mehmet", "Ali", "Veli"];
  

  return (
    <>
      <div>
        {/* <p>a değişkeninin değeri: {a}</p>
        <p>firstName değişkeninin değeri: {firstName}</p>

        <p>Ortalama notunuz: {(vize1 + vize2) / 2}</p>

        <p>Sonuc: {sonuc ? "Geçti" : "Kaldı"}</p> */}

        {/* 
        {vize1 + vize2 <= 50 ? <p>Ortalama notunuz: {(vize1 + vize2) / 2}  Kaldınız</p> : 
        <p>Ortalama notunuz: {(vize1 + vize2) / 2}  Geçtiniz</p>} */} 

        {isimler.map((isim, index) => (
          <p style={{color: "red", fontSize: "20px"}} key={index}>{isim}</p>
        ))}


      </div>
    </>
  )
}

export default App
