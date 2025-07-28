import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './redux/counterSlice'
import UserList from './userList'

function App() {

  const { value } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      {/* <div>
        <h1>Counter: {value}</h1>
      </div>
      <div>
        <button onClick={() => dispatch(increment())}>Arttır</button>
        <button onClick={() => dispatch(decrement())}>Azalt</button>
      </div> */}

      <UserList />


    </>
  )
}

export default App
