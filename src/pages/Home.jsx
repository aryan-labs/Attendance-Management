import React from 'react';
import Login from '../components/Register';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white ">
      
      <div className="flex  justify-between items-center p-4 border-b border-gray-800">
        <h1 className="text-lg "> Attendance Tracker</h1>
        <div className="flex gap-10">
          <NavLink to='/' className="text-gray-400 text-xl pt-1 hover:text-white">Login</NavLink>
          <NavLink to='/Register' className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-300">Register</NavLink>
        </div> 
      </div>
      
      
      <div className="flex  justify-between pt-20 pr-12 pl-12 pb-12">
            <div  className='pt-5'>
          <h2 className="text-5xl font-bold ">Track Your College<br /> Attendance</h2>
          <p className="text-gray-400 mt-4 max-w-lg">
            Stay on top of your attendance requirements with our easy-to-use tracker. Monitor your progress, get insights, and never fall below the required percentage.
          </p>
          <div className="mt-6 flex ">
            <button className="bg-white text-black px-6 py-2 rounded-md hover:bg-gray-300">Get Started</button>
            <button className="bg-gray-900 ml-6 text-white px-6 py-2 rounded-md hover:bg-gray-700">Learn More</button>
          </div>
        </div>
        
              <div className="mr-10 fle mt-12 md:mt-0">
          <div className="w-[400px] h-[300px] bg-white rounded-xl flex justify-center items-center">

          </div>
        </div>
        
      </div>
       <div className="bg-gray-900 py-16 px-12 text-center">
        <h2 className="text-4xl font-bold">Key Features</h2>
        <p className="text-gray-400 mt-4">Everything you need to track and improve your attendance</p>
        <div className="flex justify-center mt-10 space-x-10">
          
          <div className="w-1/3 bg-gray-700 p-8 rounded-lg">
            <div className="text-3xl"></div>
            <h3 className="text-xl font-semibold mt-4">Personalized Planner</h3>
            <p className="text-gray-400 mt-2">Get a customized attendance planner based on your branch, year, and subjects.</p>
          </div>
          
          <div className="w-1/3 bg-gray-700 p-8 rounded-lg">
            <div className="text-3xl"></div>
            <h3 className="text-xl font-semibold mt-4">Easy Attendance Marking</h3>
            <p className="text-gray-400 mt-2">Mark your attendance with a simple click - Present, Absent, No Class, or Grace Time.</p>
          </div>
          
          <div className="w-1/3 bg-gray-700 p-8 rounded-lg">
            <div className="text-3xl"></div>
            <h3 className="text-xl font-semibold mt-4">Smart Insights</h3>
            <p className="text-gray-400 mt-2">Get real-time calculations and insights on how to improve your attendance percentage.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
