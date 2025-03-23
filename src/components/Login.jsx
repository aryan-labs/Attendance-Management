import React, { useState } from "react";

import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="bg-gray-900 text-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-bold mb-4 text-center">Login </h2>
        <p className="text-gray-400 text-center mb-6">Enter your details to Login</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          

          <div>
            <p className=" text-sm">Email</p>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="example@gmail.com" className="w-full p-2 border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" required={true}/>
          </div>

          <div>
            <p className=" text-sm">Password</p>
           <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="******" className="w-full p-2 border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" required={true} />
          </div>

          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
            Login
          </button>
        </form>


        <button className="w-full flex items-center justify-center bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md">
        
        </button>

        <p className="text-center text-gray-400 mt-4">
          Dont have an account?{" "}
          <Link to="/Register" className="text-blue-500 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
