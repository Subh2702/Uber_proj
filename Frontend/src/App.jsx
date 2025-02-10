import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Userlogin from './pages/userlogin'
import UserSignup from './pages/userSignup'
import CaptainLogin from './pages/captainLogin'
import CaptainSignup from './pages/captainSignup'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/userlogin" element={<Userlogin />} />
        <Route path="/userSignup" element={<UserSignup />} />
        <Route path="/captainLogin" element={<CaptainLogin />} />
        <Route path="/captainSignup" element={<CaptainSignup />} />
      </Routes>
    </div>
  )
}

export default App