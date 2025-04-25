import React from 'react'
import './index.css'
import Home from './components/Home'
import { Route, Router, Routes } from 'react-router-dom'
import Register from './components/Register'
import Login from './components/Login'
import MarkAttendance from './components/MarkAttendance'
import Profile from './components/Profile'
import SideBar from './components/SideBar'
import Settings from './components/Settings'
import Dashboard from './components/Dashboard'
import Header from './components/Header'
import Account from './components/Account'
import Notification from './components/Notification'
import Privacy from './components/Privacy'
import Appearance from './components/Appearance'

const App = () => {
  return (
    <>
    <div className='flex'> 
      <SideBar />
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/Login' element={<Login></Login>}/>
        <Route path='/Profile' element={<Profile></Profile>}/>
        <Route path='/Register' element={<Register></Register>}/>
        <Route path='/Dashboard' element={<Dashboard></Dashboard>}/>
        <Route path='/Settings' element={<Settings activesection="Account" />}/>
        <Route path='/Settings/Account' element={<Settings activesection="Account" />}/>
        <Route path='/Settings/Notification' element={<Settings activesection="Notification" />}/>
        <Route path='/Settings/Privacy' element={<Settings activesection="Privacy" />}/>
        <Route path='/Settings/Appearance' element={<Settings activesection="Appearance" />}/>
        <Route path='/MarkAttendance' element={<MarkAttendance />}></Route>
      </Routes>
      </div>
    </>
  )
}

export default App
