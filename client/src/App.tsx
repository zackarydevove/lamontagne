import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Profile from "./pages/Profile/Profile";
import Login from "./pages/Profile/Login";
import Register from "./pages/Profile/Register";
import Sell from "./pages/Sell/Sell";
import Listing from "./pages/House/Listing";
import List from "./pages/Sell/List/List";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "./reducers/userSlice";
import { getUser } from "./api/auth";
import { User } from './types/userType';

function App(): JSX.Element {
  const dispatch = useDispatch();

  // Get user information and put in user redux state
  useEffect(() => {
    const loadUserInfo = async () => {
      const user: User | null = await getUser();
      if (user) {
        dispatch(setUser(user));
      }
    };
    loadUserInfo();
  }, [dispatch]);


  return (
    <Router>
      <Routes>
        <Route path ='/' element={<Home/>}/>
        <Route path ='/profile' element={<Profile />}/>
        <Route path ='/register' element={<Register/>}/>
        <Route path ='/login' element={<Login />}/>
        <Route path ='/sell' element={<Sell />}/>
        <Route path='/sell/list' element={<List />}/>
        <Route path='/post' element={<Listing />}/>
      </Routes>
    </Router>  
  );
}

export default App;
