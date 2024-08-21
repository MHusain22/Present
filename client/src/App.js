import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Capture from "./Components/Capture/Capture";
import Login from "./Components/Login/Login";
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
    </BrowserRouter>
  );
};

export default App;
