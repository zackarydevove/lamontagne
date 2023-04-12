import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Profile from "./pages/Profile/Profile";
import Login from "./pages/Profile/Login";
import Register from "./pages/Profile/Register";
import Sell from "./pages/Sell/Sell";

function App(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path ='/' element={<Home/>}/>
        <Route path ='/profile' element={<Profile />}/>
        <Route path ='/register' element={<Register/>}/>
        <Route path ='/login' element={<Login />}/>
        <Route path ='/sell' element={<Sell />}/>
      </Routes>
    </Router>  
  );
}

export default App;
