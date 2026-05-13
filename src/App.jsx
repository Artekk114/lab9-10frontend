import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

import Home from './pages/Home';
import Booking from './pages/Booking';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking/:trainId" element={<Booking />} />
      </Routes>
      
      {/* Контейнер для сповіщень */}
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;