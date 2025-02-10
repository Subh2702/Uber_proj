import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Userlogin from './pages/userlogin'
import UserSignup from './pages/userSignup'
import CaptainLogin from './pages/captainLogin'
import CaptainSignup from './pages/captainSignup'
import Start from './pages/Start'
import Home from './pages/Home'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/userlogin" element={<Userlogin />} />
        <Route path="/userSignup" element={<UserSignup />} />
        <Route path="/captainLogin" element={<CaptainLogin />} />
        <Route path="/captainSignup" element={<CaptainSignup />} />
        <Route path='/home' element={<Home />}/>
      </Routes>
    </div>
  )
}

export default App