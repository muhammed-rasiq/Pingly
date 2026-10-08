import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Register from './components/Register'
import ChatDashBoard from './page/ChatDashBoard'

function App() {

  return (
    <>

    <Routes>

      <Route path='/' element={<Login/>}/>
      <Route path='register' element={<Register/>}/>
      <Route path='chatDash' element={<ChatDashBoard/>}/>


    </Routes>
     
    </>
  )
}

export default App
