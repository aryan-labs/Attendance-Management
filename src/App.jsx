import React from 'react'
import './index.css'
import Home from './pages/Home'
import { Route, Router, Routes } from 'react-router-dom'
import Register from './components/Register'
import Login from './components/Login'
import MarkAttendance from './components/MarkAttendance'
import Profile from './components/Profile'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/Login' element={<Login></Login>}/>
        <Route path='/Register' element={<Register></Register>}/>
        <Route path='/Profile' element={<Profile></Profile>}/>
        <Route path='/MarkAttendance' element={
          <MarkAttendance
            subjects={['English', 'Maths', 'Physics','Chemistry','Engineering Drawing']}
          />
        }>
        </Route>
      </Routes>
    </div>
  )
}

export default App
