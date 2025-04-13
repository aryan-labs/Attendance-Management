import React, { useState, useContext ,useEffect} from 'react';
import './Appearance.css';
import { ThemeContext } from '../contexts/ThemeContext';

export default function Subject({subject , onAttendanceSubmit, reset }) {

    const { theme } = useContext(ThemeContext);
  

  const [attendance, setAttendance] = useState(''); // State to manage attendance (Present/Absent/No Class/GT)
  
  useEffect(() => {
    if (reset) {
        setAttendance(''); // Reset attendance when the reset prop changes
    }
  }, [reset]);

  const handleAttendanceClick = (status) => {
    setAttendance(status);
    onAttendanceSubmit(subject.id, status); // Pass the attendance data to the parent
  };

  return (
    <div className={`${theme === "Dark" ? "dark border-white" : "light border-black"} border p-5 text-xl m-5 rounded-lg`}>
        <h4>{subject.name}</h4>
        <div className='mt-10 flex gap-16 text-sm font-normal '>
            <button 
            onClick={() => handleAttendanceClick('Present')}
            className={`border p-2 rounded-lg ${
              attendance === 'Present' ? (theme === "Dark" ? "light border-black" : "dark border-white") : (theme === "Dark" ? "dark border-white" : "light border-black")
            }`}>
            PRESENT</button>
            <button 
            onClick={() => handleAttendanceClick('Absent')}
            className={`border p-2 rounded-lg ${
              attendance === 'Absent' ? (theme === "Dark" ? "light border-black" : "dark border-white") : (theme === "Dark" ? "dark border-white" : "light border-black")
            }`}>ABSENT</button>
            <button 
            onClick={() => handleAttendanceClick('No class')}
            className={`border p-2 rounded-lg ${
              attendance === 'No class' ? (theme === "Dark" ? "light border-black" : "dark border-white") : (theme === "Dark" ? "dark border-white" : "light border-black")
            }`}>NO CLASS</button>
            <button 
            onClick={() => handleAttendanceClick('GT')}
            className={`border p-2 rounded-lg ${
              attendance === 'GT' ? (theme === "Dark" ? "light border-black" : "dark border-white") : (theme === "Dark" ? "dark border-white" : "light border-black")
            }`}>GT(grace time)</button>
        </div>

    </div>
  )
}
