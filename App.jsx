import React from "react";
import Reports from './components/Reports';
import MyProfile from "'./components/MyProfile'";
import { Route, Router, Routes } from 'react-router-dom'

function App(){
  return(
    <div>
      <Route path='/Reports' element={<Reports></Reports>}/>
      <Route path='/MyProfile' element={<MyProfile></MyProfile>}/>
    </div>
  );
}

export default App;
