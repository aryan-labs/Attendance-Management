import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Profile= () => {
  const [formData, setFormData] = useState({
 rollNumber: "",
 branch: "",
 year: "",
 semester: "",
 startDate: "", 
 subjects: [],
  });

  const branches = [
    "Computer Science",
    "Information Technology",
    "Electronics & Communication",
    "Electrical Engineering",
    "Mechanical Engineering",
    "Civil Engineering",
    "Industrial Production",
    "Mechatronics"
  ];

  const subjects = [
    "Mathematics",
    "Physics",
    "Computer Science",
    "Electronics",
    "Chemistry",
    "Machine learning",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubjectChange = (subject) => {
    setFormData((prev) => {
      const updatedSubjects = prev.subjects.includes(subject)
        ? prev.subjects.filter((s) => s !== subject)
        : [...prev.subjects, subject];
      return { ...prev, subjects: updatedSubjects };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="bg-black min-h-screen flex items-center justify-center">
      <div className="bg-gray-800 text-white rounded-lg shadow-lg p-10 max-w-lg w-full">
        <div className="flex pl-20">
        <h1 className="text-3xl font-bold text-center"> Attendance Tracker</h1>
        <NavLink to='/'className="text-2xl pl-16 ">X</NavLink>
        </div>
        <p className="text-gray-400 text-center mb-6">Complete Your Profile</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          
          <div>
            <label className="block text-sm">Roll Number</label>
            <input
              type="text"
              name="rollNumber"
              value={formData.rollNumber}
              onChange={handleChange}
              className="w-full p-2 rounded-lg bg-gray-700 border border-gray-600"
              placeholder="0201CS241025"
              required
            />
          </div>

          <div>
            <label className="block text-sm">Branch</label>
            <select
              name="branch"
              value={formData.branch}
              onChange={handleChange}
              className="w-full p-2 rounded-lg bg-gray-700 border border-gray-600"
              required
            >
              <option value="">Select branch</option>
              {branches.map((branch, index) => (
                <option key={index} value={branch}>
                  {branch}
                </option>
              ))}
            </select>
          </div>

          <div>
            <p className="block text-sm">Year</p>
            <select
              name="year"
              value={formData.year}
              className="w-full p-2 rounded-lg bg-gray-700 border border-gray-600"
              onChange={handleChange}
              required
            >
              <option value="">Select year</option>
              <option value="1">1st Year</option>
              <option value="2">2nd Year</option>
              <option value="3">3rd Year</option>
              <option value="4">4th Year</option>
            </select>
          </div>

          <div>
            <label className="block text-sm">Semester</label>
             <select
              name="semester"
              value={formData.semester}
              onChange={handleChange}
              className="w-full p-2 rounded-lg bg-gray-700 border border-gray-600"
              required
            >
              <option value="">Select Semester</option>
              <option value="1">1st </option>
              <option value="2">2nd</option>
              <option value="3">3rd</option>
              <option value="4">4th</option>
              <option value="4">5th</option>
              <option value="4">6th</option>
              <option value="4">7th</option>
              <option value="4">8th</option>
            </select>
          </div>

          <div>
            <label className=" text-sm">Start Date</label>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className="w-full p-2 rounded-lg bg-gray-700 border border-gray-600"
              required
            />
          </div>

          <div>
            <label className="block text-lg font-semibold text-center pr-12 mb-3">Select Subjects</label>
            <div className="grid grid-cols-2 gap-2">
              {subjects.map((subject, index) => (
                <div key={index} className="flex items-center">
                  <input
                    type="checkbox"
                    id={subject}
                    checked={formData.subjects.includes(subject)}
                    onChange={() => handleSubjectChange(subject)}
                    className="w-4 h-4 mr-2"
                  />
                  <label htmlFor={subject}>{subject}</label>
                </div>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg"
          >
            Save Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
