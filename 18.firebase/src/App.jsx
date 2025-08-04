import './App.css'
import './css/Global.css'
import RouterConfig from './config/RouterConfig.jsx'
import Navbar from './components/Navbar.jsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {


  return (
    <div>
      <Navbar />
      <RouterConfig />    
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  )
}

export default App
