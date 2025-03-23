import React from 'react'
import './index.css'
import Home from './pages/Home'
import { Route, Router, Routes } from 'react-router-dom'
import Register from './components/Register'
import Login from './components/Login'

const App = () => {
  return (
    <div>
   <Routes>
      <Route path='/' element={<Home></Home>}/>
      <Route path='/Login' element={<Login></Login>}/>
      <Route path='/Register' element={<Register></Register>}/>
      </Routes>
      

    </div>
  )
}

export default App
