import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import './Appearance.css';
import { ThemeContext } from '../contexts/ThemeContext';

export default function Header() {
    const { theme } = useContext(ThemeContext);
  return (
    <div className={theme === "Dark" ? "dark border-b border-white" : "light border-b border-black"}>
        <div className="flex  justify-between items-center p-4 border-b border-gray-800">
        <h1 className="text-lg "> Attendance Tracker</h1>
        <div className="flex gap-10">
          <NavLink to='/Login' className="text-gray-400 text-xl pt-1 hover:text-white">Login</NavLink>
          <NavLink to='/Register' className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-300">Register</NavLink>
        </div> 
      </div>
      
    </div>
  )
}
