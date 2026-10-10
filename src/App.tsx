import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Register from './components/Register'
import ChatDashBoard from './page/ChatDashBoard'
import Profile from './page/Profile'
import Settings from './page/Settings'
import ForgotPassword from './components/ForgotPassword'

function App() {

  return (
    <>

    <Routes>

      <Route path='/' element={<Login/>}/>
      <Route path='register' element={<Register/>}/>
      <Route path='chatDash' element={<ChatDashBoard/>}/>
      <Route path='profile' element={<Profile/>}/>
      <Route path='settings' element={<Settings/>}/>
      <Route path='forgotPassword' element={<ForgotPassword/>}/>


    </Routes>
     
    </>
  )
}

export default App
