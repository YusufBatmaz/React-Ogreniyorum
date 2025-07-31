import './App.css'
import useCounter from './hooks/useCounter'
import useToggle from './hooks/useToggle'

function App() {

  const [count, increase, decrease] = useCounter(0)
  const [open, change] = useToggle()

  return (
    <div>
      {/* <div>
        {count}
      </div>
      <div>
        <button onClick={increase}>Artır</button>
        <button onClick={decrease}>Azalt</button>
      </div> */}

      {open && <div style={{ width: '100px', height: '100px', backgroundColor: 'red' }}>

        Kutu
      </div>}
      <div>
        <button onClick={change}> {open ? 'Gizle' : 'Göster'}</button>
      </div>


    </div>
  )
}

export default App
