import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Calendar from 'react-calendar'; 
import 'react-calendar/dist/Calendar.css'; // Import the default styles for the calendar
import  './MarkAttendance.css';

export default function MarkAttendance({ subjects }) {
    const [selectedSubject, setSelectedSubject] = useState(subjects[0]); // Default to the first subject
    const [attendance, setAttendance] = useState(''); // State to manage attendance (Present/Absent/No Class/GT)

    const handleSubjectChange = (e) => {
        setSelectedSubject(e.target.value); // Update the selected subject
        setAttendance(''); // Reset attendance when the subject changes
    };

    const handleAttendanceSubmit = () => {
        if (!attendance) {
            alert('Please select an attendance option!');
            return;
        }
        alert(`Attendance for ${selectedSubject} marked as: ${attendance}`);
    };

    return (
        <div className="min-h-screen bg-gray-800">
            <div className="text-5xl bg-black p-4 mb-20 text-gray-300 font-bold text-center">
                Mark Your Attendance for Today!
            </div>

            <div className='font-bold text-5xl mb-20 flex flex-row items-center justify-center h-auto gap-20'>
                <div className='m-5 text-white'>
                    <p>Attendance Made Simple & Smart!
                    <br />
                    <p className='pt-2 text-2xl font-normal'>Mark your presence effortlessly and stay on track with your commitments. Record Today, Succeed Tomorrow!</p>
                    </p>
                </div>
                
                
                <div className='bg-gray-900 p-1 rounded-lg mt-4 calendar-container' >
                    <Calendar
                        value={new Date()}
                        tileClassName={({ date, view }) => {
                            const today = new Date();
                            return date.getDate() === today.getDate() &&
                                date.getMonth() === today.getMonth() &&
                                date.getFullYear() === today.getFullYear();
                            
                        }}
                    />
                </div>
            </div>

            
            {/* Subject Selection */}
            <div className="mb-6">
                <label className='bg-gray-300 rounded-lg text-3xl p-2 m-5 text-black font-semibold'>
                    Subjects in your Today's Schedule 👉
                </label>
                <select
                    className="p-2 rounded-lg bg-gray-300"
                    value={selectedSubject}
                    onChange={handleSubjectChange}
                >
                    {subjects.map((subject, idx) => (
                        <option key={idx} className="bg-gray-300 text-black" value={subject}>
                            {subject}
                        </option>
                    ))}
                </select>
            </div>
            <h2 className="text-2xl p-3 m-2 mb-0 pb-0 font-semibold text-white">Mark Attendance Status for: {selectedSubject}</h2>
            <form className="p-5 rounded-lg text-white font-semibold flex flex-row items-center gap-20">   
                
                <div className="mb-4 text-xl">
                    <input
                        type="radio"
                        id="present"
                        name="attendance"
                        value="Present"
                        checked={attendance === 'Present'}
                        onChange={(e) => setAttendance(e.target.value)}
                    />
                    <label htmlFor="present" className="ml-2">Present</label>
                </div>
                <div className="mb-4 text-xl">
                    <input
                        type="radio"
                        id="absent"
                        name="attendance"
                        value="Absent"
                        checked={attendance === 'Absent'}
                        onChange={(e) => setAttendance(e.target.value)}
                    />
                    <label htmlFor="absent" className="ml-2">Absent</label>
                </div>
                <div className="mb-4 text-xl">
                    <input
                        type="radio"
                        id="no class"
                        name="attendance"
                        value="No Class"
                        checked={attendance === 'No Class'}
                        onChange={(e) => setAttendance(e.target.value)}
                        />
                        <label htmlFor="no-class" className="ml-2">No Class</label>
                    </div>
                    <div className="mb-4 text-xl">
                        <input
                            type="radio"
                            id="gt"
                            name="attendance"
                            value="GT"
                            checked={attendance === 'GT'}
                            onChange={(e) => setAttendance(e.target.value)}
                        />
                        <label htmlFor="gt" className="ml-2">GT</label>
                    </div>
                    <button
                    type="button"
                    className="bg-gray-950 text-white text-xl px-4 py-2 rounded-lg"
                    onClick={handleAttendanceSubmit}
                >
                    SAVE
                </button>
            </form>
        </div>
    );
}
