import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Capture from "./Components/Capture/Capture";
import Login from "./Components/Login/Login";
import Attendance from "./Components/Attendance/Attendance";
import About from "./Components/About/About";
import Options from './Components/Options/Options';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route exact path="/capture" element={<Capture isLoggedIn={isLoggedIn} />} />
      </Routes>
      <Routes>
        <Route exact path="/login" element={<Login onLogin={handleLogin} />} />
      </Routes>
      <Routes>
        <Route exact path="/attendance" element={<Attendance />} />
      </Routes>
      <Routes>
        <Route exact path="/about" element={<About />} />
      </Routes>
      <Routes>
        <Route exact path="/options" element={<Options />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
