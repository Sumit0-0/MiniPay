import { useState } from 'react'
import './App.css'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import Wallet from './pages/Wallet'
import { BrowserRouter, Routes,Route, Navigate } from 'react-router-dom'

function App() {
  return <div>
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignIn />}/>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='*' element={<Navigate to="/dashboard" />} />
      </Routes>
   </BrowserRouter>
  </div>  
}

export default App
