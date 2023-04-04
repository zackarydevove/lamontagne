import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Profile from "./pages/Profile/Profile";
import Login from "./pages/Profile/Login";
import Register from "./pages/Profile/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path ='/' element={<Home/>}/>
        <Route path ='/profile' element={<Profile />}/>
        <Route path ='/register' element={<Register/>}/>
        <Route path ='/login' element={<Login />}/>
      </Routes>
    </Router>  
  );
}

export default App;
