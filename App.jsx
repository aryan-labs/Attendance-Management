import React from "react";
import Reports from './components/Reports';
import MyProfile from "'./components/MyProfile'";
import { Route, Router, Routes } from 'react-router-dom'

function App(){
  return(
    <div>
      <Reports />
      <MyProfile/>
    </div>
  );
}

export default App;
