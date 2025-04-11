import React from 'react';
import Start from './pages/Start';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Projects from './pages/Projects';
import 

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import Start from './pages/Start';
// import Login from './pages/Login';
// import Register from './pages/Register';
// import Profile from './pages/Profile';
// import Projects from './pages/Projects';
// import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Home />} />  
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<Projects />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Register />} />

        {/* Add more routes as needed */}

      </Routes>
    </Router>
  );
}

export default App;
