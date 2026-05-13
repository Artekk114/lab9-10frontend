import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

// Заглушка для 10 лабораторної роботи
const BookingPagePlaceholder = () => (
  <div style={{ padding: '2rem', textAlign: 'center' }}>
    <h2>Сторінка бронювання місць (Лабораторна 10)</h2>
    <p>Тут буде схема вагону та форма бронювання.</p>
  </div>
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/booking/:trainId" element={<BookingPagePlaceholder />} />
    </Routes>
  );
}

export default App;