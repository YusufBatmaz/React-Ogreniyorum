import { useState } from 'react'
import './App.css'
import Login from './Login'
import { users } from './Login'


function App() {

  console.log(users);

  return (
    <>  {/* fragment */}

      <div>
        <Login />
        <hr />
        <hr />
        <Login />
      </div>
    </>
  )
}

export default App
