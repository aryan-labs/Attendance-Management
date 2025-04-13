import React from 'react'
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './Appearance.css';
import { ThemeContext } from '../contexts/ThemeContext';

export default function SideBar() {
      const { theme } = useContext(ThemeContext);
  
  return (
    <div className={theme === "Dark" ? "dark border-x border-white" : "light border-x border-black"}>
        <div className=" h-full text-xl sm:w-60 flex flex-col">
            <NavLink to='/Dashboard' className="p-4">Dashboard</NavLink>
            <NavLink to='/Profile' className="p-4">Profile</NavLink>
            <NavLink to='/MarkAttendance' className="p-4">Mark Attendance</NavLink>
            <NavLink to='/Schedule' className="p-4">Schedule</NavLink>
            <NavLink to='/Reports' className="p-4">Reports</NavLink>
            <NavLink to='/Settings' className="p-4">Settings</NavLink>
            <NavLink to='/Logout' className="p-4">Logout</NavLink>
        </div>
      
    </div>
  )
}
