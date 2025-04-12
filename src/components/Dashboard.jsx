import React from 'react'

const Dashboard = () => {
  return (
    <div>
      
      <div className="w-64 bg-gray-900 p-4 space-y-4">
        <h1 className="text-2xl font-bold text-white">Attendance Tracker</h1>
        <nav className="flex flex-col space-y-3">
          <a href="#" className="hover:bg-gray-800 p-2 rounded">Dashboard</a>
          <a href="#" className="hover:bg-gray-800 p-2 rounded">Mark Attendance</a>
          <a href="#" className="hover:bg-gray-800 p-2 rounded">Calendar</a>
          <a href="#" className="hover:bg-gray-800 p-2 rounded">Reports</a>
          <a href="#" className="bg-gray-800 p-2 rounded font-semibold">Profile</a>
          <a href="#" className="hover:bg-gray-800 p-2 rounded">Settings</a>
        </nav>
      </div>
    </div>
  )
}

export default Dashboard
