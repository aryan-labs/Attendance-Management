import React, { useState } from 'react';
import Calendar from 'react-calendar'; 
import 'react-calendar/dist/Calendar.css'; // Import the default styles for the calendar
import  './MarkAttendance.css';
import SubjectList from './SubjectList';

export default function MarkAttendance({ subjects }) {
    const [selectedDate, setSelectedDate] = useState(new Date()); // State to manage the selected date
  const [attendanceData, setAttendanceData] = useState({}); // State to store attendance for all subjects

  const handleDateChange = (date) => {
    setSelectedDate(date); // Update the selected date
  };

  const handleAttendanceSubmit = (subjectId, status) => {
    setAttendanceData((prevData) => ({
      ...prevData,
      [subjectId]: status, // Update attendance for the specific subject
    }));
  };

  const saveAttendance = () => {
    console.log('Attendance Data:', attendanceData);
    alert('Attendance saved successfully!');
    };

    return (
        <div className="min-h-screen font-serif bg-gray-800">
            <div className="text-5xl font-serif bg-black p-4 mb-10 text-gray-300 font-bold text-center">
                Mark Your Attendance for Today!
            </div>

            <div className='m-5 text-white font-serif pb-10'>
                    <div className='text-3xl font-bold '>Attendance Made Simple & Smart!
                        <br />
                        <p className='pt-1 text-xl font-normal text-gray-400'>Mark your presence effortlessly and stay on track with your commitments. Record Today, Succeed Tomorrow!</p>
                    </div>
                </div>

            <div className='font-bold text-4xl mb-20 flex flex-row  justify-start gap-20 p-5 h-auto w-full'>
                                
                <div className='p-4 rounded-lg text-white border-l border-t border-gray-100 bg-gray-950 mt-4 calendar-container' >
                    <h2 className='text-2xl p-2 mb-5'>Select Date</h2>
                    <Calendar
                        value={selectedDate}
                        onChange={handleDateChange} // Allow date selection
                        tileClassName={({ date, view }) => {
                            const today = new Date();
                            return date.getDate() === today.getDate() &&
                                date.getMonth() === today.getMonth() &&
                                date.getFullYear() === today.getFullYear();
                        }}
                    />
                </div>

                <div className='p-1 rounded-lg mt-4 bg-gray-950 w-1/2 border-l border-t border-gray-100'>
                <div className='flex flex-row items-center gap-x-16'>
                    <div>
                        <h2 className="text-2xl p-3 m-2 mb-0 pb-0 font-semibold text-white">
                        Mark Attendance for: {selectedDate.toDateString()}
                        </h2>
                        <h4 className='text-xl text-gray-400 pl-5 pb-5 '>Select attendance status for each subject</h4>
                    </div>
                    <button 
                    onClick={saveAttendance}
                    className='bg-gray-100 text-gray-950 rounded text-xl h-10 p-2 ml-10'>SAVE</button>
                    
                </div>
                    
                    <SubjectList onAttendanceSubmit={handleAttendanceSubmit}/>
                </div>

            </div>     
            
        </div>
    );
}
